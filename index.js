class ECTS {
  constructor(grade) {
    this.grade = grade;
  }

  ectsFromScore(score) {
    for (const [grade, range] of Object.entries(ECTS_TO_SCORE_MAP)) {
      const [min, max] = range;
      if (score >= min && score <= max) {
        return grade;
      }
    }
    return "F";
  }
}

module.exports = ECTS;
