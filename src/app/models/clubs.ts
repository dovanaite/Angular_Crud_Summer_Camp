export interface Club {
    name: String;
    surname: String;
    email: String;
    grade: String;
    allergy: String[];
    club: [{ year: Number, clubName: String, clubType: String }];
}