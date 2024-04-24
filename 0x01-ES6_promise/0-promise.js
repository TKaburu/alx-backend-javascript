export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    if (success) {
      resolve('success');
    } else {
      reject(Error('failed'));
    }
  });
}
