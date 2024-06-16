const success = {
    status: 200,
    message: "Request Processed"
}
const notFound = {
    status: 404,
    message: "Information not found"
}
const serverFailure = {
    status: 500,
    message: "Server Error"
}
module.exports = {
    success,
    notFound,
    serverFailure
}