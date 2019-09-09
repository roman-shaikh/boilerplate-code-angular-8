export class AppConst {
    public static trimPattern = /^\s+|\s+$/gm; // pattern for trimming
    public static pageSize = 10;
    public static pageSizeOptions: number[] = [10, 25, 100];
    public static image = 'assets/img/user.png';
    public static noImage = 'assets/img/noimage.png'
    public static selectImg = 'assets/img/select_img.png';
    public static pinImg = 'assets/img/ic_marker_pin.png';
    public static deleteMessage = 'Do you confirm the deletion of this data';
    public static emailValidationPattern = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*(\+[a-zA-Z0-9-]+)?@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;  // email validation pattern
}
