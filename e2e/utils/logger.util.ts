export class Logger {
  static info(message: string): void {
    console.log(`[INFO] [${new Date().toISOString()}] ${message}`);
  }

  static step(stepName: string): void {
    console.log(`\n🔹 STEP: ${stepName}`);
  }
}