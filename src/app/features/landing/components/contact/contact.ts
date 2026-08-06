import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTACT } from '../../../../core/constants/contact.constants';
import { MATERIAL_OPTIONS, PROJECT_TYPE_OPTIONS } from '../../data/landing-content.constants';
import { Icon } from '../../../../shared/components/icon/icon';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';

interface ContactFormControls {
  name: FormControl<string>;
  email: FormControl<string>;
  projectType: FormControl<string>;
  material: FormControl<string>;
  description: FormControl<string>;
  desiredDate: FormControl<string>;
  consent: FormControl<boolean>;
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Icon, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fileInput = viewChild<ElementRef<HTMLInputElement>>('fileInput');
  private readonly cdr = inject(ChangeDetectorRef);
  protected readonly contact = CONTACT;
  protected readonly projectTypes = PROJECT_TYPE_OPTIONS;
  protected readonly materials = MATERIAL_OPTIONS;
  protected readonly sending = signal(false);
  protected readonly sent = signal(false);
  protected readonly submitError = signal(false);
  protected readonly fileError = signal<string | null>(null);
  protected readonly fileName = signal<string | null>(null);
  protected readonly form = new FormGroup<ContactFormControls>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(80)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email, Validators.maxLength(120)],
    }),
    projectType: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    material: new FormControl('por-definir', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(20), Validators.maxLength(2000)],
    }),
    desiredDate: new FormControl('', { nonNullable: true }),
    consent: new FormControl(false, { nonNullable: true, validators: [Validators.requiredTrue] }),
  });

  protected controlInvalid(controlName: keyof ContactFormControls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  protected onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    this.fileError.set(null);
    this.fileName.set(null);
    if (!file) return;
    const allowedTypes = [
      'application/pdf',
      'image/png',
      'image/jpeg',
      'image/svg+xml',
      'application/dxf',
      'image/vnd.dxf',
    ];
    const allowedExtension = /\.(pdf|png|jpe?g|svg|dxf)$/i.test(file.name);
    if (!allowedTypes.includes(file.type) && !allowedExtension) {
      this.fileError.set('El archivo debe ser PDF, SVG, DXF, PNG o JPG.');
      input.value = '';
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      this.fileError.set('El archivo no puede superar los 10 MB.');
      input.value = '';
      return;
    }
    this.fileName.set(file.name);
  }

  protected removeFile(): void {
    const input = this.fileInput()?.nativeElement;
    if (input) input.value = '';
    this.fileName.set(null);
    this.fileError.set(null);
  }

  protected async submit(event: Event): Promise<void> {
    event.preventDefault();

    if (this.form.invalid || this.fileError()) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    this.submitError.set(false);
    this.cdr.detectChanges();

    const form = event.target as HTMLFormElement | null;

    if (!form) {
      this.sending.set(false);
      this.submitError.set(true);
      return;
    }

    try {
      const formData = new FormData(form);
      const projectFile = formData.get('projectFile');
      const hasFile = projectFile instanceof File && projectFile.size > 0;
      let body: BodyInit;
      let headers: HeadersInit | undefined;

      if (hasFile) {
        body = formData;
      } else {
        const encodedBody = new URLSearchParams();
        formData.forEach((value, key) => {
          if (typeof value === 'string') encodedBody.append(key, value);
        });
        body = encodedBody.toString();
        headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
      }

      const response = await fetch('/', {
        method: 'POST',
        headers,
        body,
      });

      if (!response.ok) {
        throw new Error(`Netlify form submission failed with status ${response.status}`);
      }

      this.sent.set(true);
      this.form.reset({
        name: '',
        email: '',
        projectType: '',
        material: 'por-definir',
        description: '',
        desiredDate: '',
        consent: false,
      });
      this.removeFile();
    } catch {
      this.submitError.set(true);
    } finally {
      this.sending.set(false);
      this.cdr.detectChanges();
    }
  }
}
