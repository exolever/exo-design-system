import { Component } from '@angular/core';

enum CertificateEnum {
  FOUNDATION = 'CFO',
  CONSULTANT = 'CCO',
  SPRINT_COACH = 'CSC',
  AMBASSADOR = 'CEA',
  TRAINER = 'CTR',
  BOARD_ADVISOR = 'CBA',
}

@Component({
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class ExamplesComponent {

  certifications1 = [
    { name: 'ExO Board Advisor', code: CertificateEnum.BOARD_ADVISOR },
  ];

  certifications2 = [
    { name: 'ExO Board Advisor', code: CertificateEnum.BOARD_ADVISOR },
    { name: 'ExO Consultants', code: CertificateEnum.CONSULTANT },
  ];

  certifications3 = [
    { name: 'ExO Coach', code: CertificateEnum.SPRINT_COACH },
    { name: 'ExO Ambassador', code: CertificateEnum.AMBASSADOR },
    { name: 'ExO Trainer', code: CertificateEnum.TRAINER },
  ];

  certifications4 = [
    { name: 'ExO Coach', code: CertificateEnum.SPRINT_COACH },
    { name: 'ExO Ambassador', code: CertificateEnum.AMBASSADOR },
    { name: 'ExO Trainer', code: CertificateEnum.TRAINER },
    { name: 'ExO Foundations', code: CertificateEnum.FOUNDATION },
  ];

  certifications5 = [
    { name: 'ExO Coach', code: CertificateEnum.SPRINT_COACH },
    { name: 'ExO Ambassador', code: CertificateEnum.AMBASSADOR },
    { name: 'ExO Trainer', code: CertificateEnum.TRAINER },
    { name: 'ExO Board Advisor', code: CertificateEnum.BOARD_ADVISOR },
    { name: 'ExO Foundations', code: CertificateEnum.FOUNDATION },
  ];

  certifications6 = [
    { name: 'ExO Coach', code: CertificateEnum.SPRINT_COACH },
    { name: 'ExO Ambassador', code: CertificateEnum.AMBASSADOR },
    { name: 'ExO Trainer', code: CertificateEnum.TRAINER },
    { name: 'ExO Board Advisor', code: CertificateEnum.BOARD_ADVISOR },
    { name: 'ExO Consultants', code: CertificateEnum.CONSULTANT },
    { name: 'ExO Foundations', code: CertificateEnum.FOUNDATION },
  ];

  imagesSet = [
    { src: null, tooltip: 'Richard Nixon' },
    // tslint:disable-next-line:max-line-length
    { src: 'https://vignette.wikia.nocookie.net/en.futurama/images/f/f2/PhilipJ.Fry.png/revision/latest/top-crop/width/200/height/150?cb=20110916120042', tooltip: 'Philip J. Fry' },
    // tslint:disable-next-line:max-line-length
    { src: 'https://vignette.wikia.nocookie.net/en.futurama/images/d/d4/Turanga_Leela.png/revision/latest/top-crop/width/200/height/150?cb=20150218013044', tooltip: 'Turanga Leela' },
    // tslint:disable-next-line:max-line-length
    { src: 'https://vignette.wikia.nocookie.net/en.futurama/images/4/43/Bender.png/revision/latest/top-crop/width/200/height/150?cb=20150206072725', tooltip: 'Bender Bending Rodriguez' },
    // tslint:disable-next-line:max-line-length
    { src: 'https://vignette.wikia.nocookie.net/en.futurama/images/9/94/AmyWong.png/revision/latest/top-crop/width/200/height/150?cb=20170123190854', tooltip: 'Amy Kroker' },
  ];

}
