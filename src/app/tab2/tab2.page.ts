import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  mensagem = '';
  textoDigitado = '';
  fulltext = '';
  constructor(private alertController: AlertController) { }
  async chamarMensagem() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: this.textoDigitado,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.mensagem = 'Alerta cancelado';
          },
        },
        {
          text: 'Sim, Por favor',
          role: 'confirm',
          handler: () => {
            this.mensagem = this.textoDigitado;
          },
        },
      ],
    });

    await alert.present();
  }
}


