const googleAppScriptUrl = 'https://script.google.com/macros/s/AKfycbz34B8xl8qdDClslJUQ0c6FQql4WLe1wE0HyeL5-ja9vnELWYk/exec';

export function sendEmail(vars) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', googleAppScriptUrl);
    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.ontimeout = xhr.onerror = reject; // eslint-disable-line no-multi-assign
    xhr.send(JSON.stringify(vars));
  });
}
