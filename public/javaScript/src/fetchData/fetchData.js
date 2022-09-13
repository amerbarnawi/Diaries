export async function fetchData(url, requestOptions) {
  const response = await fetch(url, requestOptions);

  if (
    response.status === 200 ||
    response.status === 201 ||
    response.status === 404 ||
    response.status === 400
  ) {
    return response.json();
  } else if (response.status >= 500) {
    throw new Error("Server error, please try later!");
  }
}
