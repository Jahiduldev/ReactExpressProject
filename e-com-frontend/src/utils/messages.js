export const showError = (error, msg) => {
    if(error) return <div className="alert alert-danger">{msg}</div>
}

export const showSuccess = (success, msg) => {
    if(error) return <div className="alert alert-danger">{msg}</div>
}

export const showLoading = loading => {
    if(error) return <div className="alert alert-info">{loading}</div>
}