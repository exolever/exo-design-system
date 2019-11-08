import { Component } from '@angular/core';

@Component({
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class ExamplesComponent {

  certifications5 = [
    { name: 'ExO Coach', code: 'X' },
    { name: 'ExO Ambassador', code: 'K' },
    { name: 'ExO Trainer', code: 'TR' },
    { name: 'ExO Fundations', code: 'EF' },
  ];

  certifications4 = [
    { name: 'ExO Coach', code: 'X' },
    { name: 'ExO Ambassador', code: 'K' },
    { name: 'ExO Trainer', code: 'TR' },
  ];

  certifications6 = [
    { name: 'ExO Coach', code: 'X' },
    { name: 'ExO Ambassador', code: 'K' },
    { name: 'ExO Trainer', code: 'TR' },
    { name: 'ExO Board Advisor', code: 'BA' },
    { name: 'ExO Consultants', code: 'EC' },
    { name: 'ExO Foundations', code: 'EF' },
  ];
  imagesSet = [
    { src: null, tooltip: 'Richard Nixon' },
    { src: 'https://vignette.wikia.nocookie.net/en.futurama/images/f/f2/PhilipJ.Fry.png/revision/latest/top-crop/width/200/height/150?cb=20110916120042', tooltip: 'Philip J. Fry', alt: 'Philip J. Fry' },
    { src: 'https://vignette.wikia.nocookie.net/en.futurama/images/d/d4/Turanga_Leela.png/revision/latest/top-crop/width/200/height/150?cb=20150218013044', tooltip: 'Turanga Leela', alt: 'Turanga Leela' },
    { src: 'https://vignette.wikia.nocookie.net/en.futurama/images/4/43/Bender.png/revision/latest/top-crop/width/200/height/150?cb=20150206072725', tooltip: 'Bender Bending Rodriguez', alt: 'Bender Bending Rodriguez' },
    { src: 'https://vignette.wikia.nocookie.net/en.futurama/images/9/94/AmyWong.png/revision/latest/top-crop/width/200/height/150?cb=20170123190854', tooltip: 'Amy Kroker', alt: 'Amy Kroker' },
  ];
  imagesSet1 = [
    { src: 'https://www.guidedogs.org/wp-content/uploads/2019/08/Chad-and-Andros-1-575x345.jpg',
      tooltip: 'Amy Kroker', alt: 'Amy Kroker' },
  ];

}
