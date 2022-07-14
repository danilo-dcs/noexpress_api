export async function getRequestBody(request){
    let data = ''
    await request.on('data', chunk => {
        data += chunk;
      });

    await request.on('end', () => {
        data = JSON.parse(data)
    });
    return data
}