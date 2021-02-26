const getLocalTime = () => {
    const timezone = 8; //目标时区时间，东八区
    const offset_GMT = new Date().getTimezoneOffset(); // 本地时间和格林威治的时间差，单位为分钟
    const nowDate = new Date().getTime(); // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
    return new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000);
}
export default getLocalTime;