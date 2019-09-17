export function JobDto(jobDto) {
    const _jobDto = jobDto || {};

    this.id = _jobDto.id || null;
    this.position = _jobDto.position || "";
    this.cityName = _jobDto.cityName || "";
    this.districtName = _jobDto.districtName || "";
    this.organization = _jobDto.organization || "";
    this.appliedDate = _jobDto.createDate || "";
    this.lastUpdate = _jobDto.lastUpdate || "";
}

export function JobListDto(jobListDto) {
    const _jobListDto = [];

    jobListDto.forEach(jobDto => {
        _jobListDto.push(new JobDto(jobDto));
    });

    return _jobListDto;
}