export class ProductModel {
    public constructor(
        public id?: number,
        public name?: string,
        public price?: number,
        public stock?: number,
        public image?: File) { }
}
