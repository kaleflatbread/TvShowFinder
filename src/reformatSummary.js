const reformatSummary = (summary) => {
  summary = summary.split(' ');
  const test = summary.filter((word) => {
    let wordCheck = true;
    if (word.includes('<') || word.includes('&amp')) {
      wordCheck = false;
    }
    return wordCheck;
  });

  return test.join(' ').slice(0, 110) + '....';
};

export default reformatSummary;
