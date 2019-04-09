import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

enum TypeSnackBar {
  Footer,
  TimeCounter
}

export enum ColorSnackBar {
  Success = 'snack--success', // BG #TealA400 Text #White
  Error = 'snack--error', // BG #Red500 Text #white
  Info = 'snack--info', // BG #Blue500 Text #white
  Warning = 'snack--warning', // BG #Amber500 Text #Grey900
}

interface SnackBarConfig extends MatSnackBarConfig {
  type?: TypeSnackBar,
  color?: ColorSnackBar,
}

const DEFAULT_CONFIG: SnackBarConfig = {
  type: TypeSnackBar.Footer,
  color: ColorSnackBar.Info,
};

@Injectable({
  providedIn: 'root'
})
export class ExOSnackbarService {
  constructor(
    private snackBar: MatSnackBar
  ) { }

  success(message: string, action: string, config?: SnackBarConfig) {
    DEFAULT_CONFIG.duration = 12000;
    DEFAULT_CONFIG.panelClass = ColorSnackBar.Success;

    const snackConfig = { ...DEFAULT_CONFIG, ...config };
    this.snackBar.open(message, action, snackConfig);
  }

  error(message: string, action: string, config?: SnackBarConfig) {
    DEFAULT_CONFIG.duration = 30000;
    DEFAULT_CONFIG.panelClass = ColorSnackBar.Error;

    const snackConfig = { ...DEFAULT_CONFIG, ...config };
    this.snackBar.open(message, action, snackConfig);
  }

  info(message: string, action: string, config?: SnackBarConfig) {
    DEFAULT_CONFIG.panelClass = ColorSnackBar.Info;

    const snackConfig = { ...DEFAULT_CONFIG, ...config };
    this.snackBar.open(message, action, snackConfig);
  }

  warning(message: string, action: string, config?: SnackBarConfig) {
    DEFAULT_CONFIG.type = TypeSnackBar.TimeCounter;
    DEFAULT_CONFIG.panelClass = ColorSnackBar.Warning;

    const snackConfig = { ...DEFAULT_CONFIG, ...config };
    this.snackBar.open(message, action, snackConfig);
  }
}
