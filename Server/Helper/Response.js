
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
const authResponse = (response, statusValue, ...[dataKey, payload]) => 
response.status(statusValue).json({
 status: 'error',
 [dataKey]: payload
});
const userResponse = (response, statusValue, userData) => 
response.status(statusValue).json({
 status: '200',
 data: userData
});

export {
 userResponse, authResponse, serverResponse, serverError
};
