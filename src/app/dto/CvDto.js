export function CvDto(cvDto) {
    const _cvDto = cvDto || {};

    this.id = _cvDto.id || null;
    this.link = _cvDto.link || "";
    this.nameFile = _cvDto.nameFile || "";
    this.isDefault = _cvDto.isDefault || false;
}

export function CvListDto(cvListDto) {
    const _cvListDto = [];

    cvListDto.forEach(cvDto => {
        _cvListDto.push(new CvDto(cvDto));
    });

    return _cvListDto;
}