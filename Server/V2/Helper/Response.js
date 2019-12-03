
const serverError = response =>
response.status(500).json({
 status: 'error',
 error: "Something went wrong. Try again later"
});
const serverResponse = (response, statusValue, ...[statusKey, statusResult, dataKey, payload]) => 
response.status(statusValue).json({
 [statusKey]: statusResult,
 [dataKey]: payload
});
const authenticationResponse = (response, statusValue, ...[dataKey, payload]) => 
response.status(statusValue).json({
 status: 'error',
 [dataKey]: payload
});

export {
  authenticationResponse, serverResponse, serverError
};
