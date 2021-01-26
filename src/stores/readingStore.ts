class Readings {
  systolic = "";
  diastolic = "";

  setSystolic(val: string) {
    this.systolic = val;
  }

  setDiastolic(val: string) {
    this.diastolic = val;
  }
}

const readings = new Readings();

export { readings };
