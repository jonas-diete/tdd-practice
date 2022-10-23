const printReport = (studentScores) => {
  let scoresArray = studentScores.split(', ');
  let scoresHash = {
    'Green': 0,
    'Amber': 0,
    'Red': 0
  }

  scoresArray.forEach((score) => {
    if (score === 'Green' || score === 'Amber' || score === 'Red') {
      scoresHash[score]++;
    }
  });

  reportArray = []
  Object.keys(scoresHash).forEach((colour) => {
    if (scoresHash[colour] > 0) {
      reportArray.push(`${colour}: ${scoresHash[colour]}`);
    }
  });

  return reportArray.join(', ');
}

module.exports = printReport;