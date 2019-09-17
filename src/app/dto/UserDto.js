export function UserDto(userDto) {
    const _userDto = userDto || {};

    this.id = _userDto.id || null;
    this.username = _userDto.username || "";
    this.email = _userDto.email || "";
    this.phoneNumber = _userDto.phoneNumber || "";
    this.firstName = _userDto.firstName || "";
    this.lastName = _userDto.lastName || "";
    this.avatar = _userDto.avatar || "";
    this.address = _userDto.address || "";
    this.isJobseekeer = _userDto.isJobseekeer || false;
    this.isRecruiter = _userDto.isRecruiter || false;
}

export function UserListDto(userListDto) {
    const _userListDto = [];

    userListDto.forEach(userDto => {
        _userListDto.push(new UserDto(userDto));
    });

    return _userListDto;
}