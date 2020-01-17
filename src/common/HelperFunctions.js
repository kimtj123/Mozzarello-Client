export function listLine(arr, callback)
{
    let lineNumbers = 0;
    let startIdx = 0;
    let endIdx = 4;
    let items = arr.length;
    let slicedArr = []

    while(items > 0)
    {      
      items = items - 4;          
      lineNumbers++
      slicedArr.push([arr.slice(startIdx,endIdx)])
      startIdx += 4;
      endIdx += 4;			
    }
  return slicedArr
}

export function parseJwt (token) 
{
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};