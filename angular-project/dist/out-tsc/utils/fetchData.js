async function fetchData(url, method, body) {
    try {
        let request = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: body ? JSON.stringify(body) : null
        });
        return await request.json();
    }
    catch (error) {
        return Error("Failed to fetch data");
    }
}
export { fetchData };
//# sourceMappingURL=fetchData.js.map