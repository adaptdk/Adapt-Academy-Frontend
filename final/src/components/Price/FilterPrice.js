const filterPrice = ({ data: { Data }, limitIndentifier }) => {
  let newData = [];
  const limit = limitIndentifier;
  const data = Data;

  for (let i = data.length - 1; i >= 0; i -= limit) {
    let inside = {
      time: data[i].time * 1000,
      close: data[i].close,
      change: undefined,
    };
    if (i !== 0) {
      inside.change = ((data[i].close - data[i - limit].close) / data[i].close * 100).toFixed(2) + '%'; 
    } else {
      inside.change = '0%';
    }
    
    const fTime = new Date(inside.time);

    const year = fTime.getFullYear();
    const month = fTime.getMonth() + 1;
    const day = fTime.getDate();
    let hours = fTime.getHours();
    let minutes = fTime.getMinutes();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    inside.time = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
    
    data[i] = inside;
    newData.push(data[i]);
  }
  return newData;
};

export default filterPrice;