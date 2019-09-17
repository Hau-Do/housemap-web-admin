// import slugify from 'slugify';

export function getMonthDayYear(stringDate){
    if(stringDate){
      let date = new Date(stringDate);
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Now", "Dec"];
      return format(date.getDate()) +' '+ monthNames[date.getMonth()] +' '+ date.getFullYear();
    } else {
      return 0+' '+0+' '+0;
    }
}

export function format(value){
    if(value){
        let stringValue = value+'';
        return stringValue.length === 1 ? '0'+stringValue : stringValue;
    } else {
        return 0;
    }
}

export function urlJobHop(job, host = null){
    const { organization, position, publicId} = job;
    console.log("urlJobHop - publicId: ", job.publicId);
    // const slug = slugify(normalizeText(`${position} ${publicId}`));
    // if(host){
    //     let fullLink = '';
    //     if(host && host.includes('/api')){
    //         host = host.slice(0, host.length-4);
    //     }
    //     if(host.includes('http://206.189.39.195:2001') || host.includes('http://localhost:2001')){
    //         fullLink = `http://206.189.39.195:3002/jobs/${organization.publicId}/${slug}`;
    //     } else if(host.includes('api-staging-jobseeker.jobhop.vn')){
    //         fullLink = `http://staging.jobhop.vn/jobs/${organization.publicId}/${slug}`;
    //     } else if(host.includes('api-jobseeker.jobhop.vn')){
    //         fullLink = `http://jobhop.vn/jobs/${organization.publicId}/${slug}`;
    //     }
    //     return fullLink;
    // } else {
    //     return `/jobs/${organization.publicId}/${slug}`;
    // }
};

export const normalizeText = (str) => {
    if (!str) return '';
    let text = str;
    text = text.replace(/[ẵẳẫẩắằăặầấâậạáàâãªäả]/g, 'a');
    text = text.replace(/[ẴẲẪẨẮẰĂẶẤẦÂẬẠÁÀÂÃÄẢ]/g, 'A');
    text = text.replace(/[ĨỈỊÍÌÎÏ]/g, 'I');
    text = text.replace(/[ĩỉịíìîï]/g, 'i');
    text = text.replace(/[ỸỶỴÝỲ]/g, 'Y');
    text = text.replace(/[ỹỷỵýỳ]/g, 'y');
    text = text.replace(/[ễểếềêệẹéèêëẻẽ]/g, 'e');
    text = text.replace(/[ỄỂẾỀÊỆẸÉÈÊËẺẺ]/g, 'E');
    text = text.replace(/[ỗổốồôộọóòôốồõºöỏơớờởợ]/g, 'o');
    text = text.replace(/[ỖỔỐỒÔỘỌÓÒÔỐỒÕÖỎƠỚỜỞ]/g, 'O');
    text = text.replace(/[ưữửựừứũủụúùûü]/g, 'u');
    text = text.replace(/[ƯỮỬỰỪỨŨỦỤÚÙÛÜ]/g, 'U');
    text = text.replace(/[’‘‹›‚]/g, '\'');
    text = text.replace(/[“”«»„]/g, '"');
    text = text.replace(/–/g, '-');
    text = text.replace(/ç/g, 'c');
    text = text.replace(/Ç/g, 'C');
    text = text.replace(/ñ/g, 'n');
    text = text.replace(/Ñ/g, 'N');
    text = text.replace(/đ/g, 'd');
    text = text.replace(/Đ/g, 'D');
    text = text.replace(/\s+/g, ' ');
    text = text.replace(/[^a-zA-Z0-9 ]+/g, ' ');
    text = text.toLowerCase();
    return text;
};
