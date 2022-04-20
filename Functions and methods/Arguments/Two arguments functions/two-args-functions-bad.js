function log(message, isError) {
  if (isError) {
    console.error(message);
  } else {
    console.log(message);
  }
}

log('Hi there!', false);
logError('An error!', true);
