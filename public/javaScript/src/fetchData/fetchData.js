export async function fetchData(url, requestOptions) {
  const response = await fetch(url, requestOptions);

  if (response.status === 200) {
    return response.json();
  } else if (
    response.status === 201 ||
    response.status === 404 ||
    response.status === 400
  ) {
    const result = await response.json();
    return result.message;
  } else if (response.status >= 500) {
    throw new Error("Server error, please try later!");
  }
}
