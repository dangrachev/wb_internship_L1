// Базовый класс Shape c абстрактными методами расчета
class Shape {
    // Методы расчета площади и периметра в базовом классе
    calculateArea() {

    }
    calculatePerimeter() {

    }
}

// Далее создаю подклассы с переопределенными методами для каждого в соответствии с его типом фигуры
// Подкласс прямоугольника
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Подкласс круга
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Подкласс треугольника
class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }
    calculateArea() {
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
    calculatePerimeter() {
        return this.a + this.b + this.c;
    }
}


const rectangle = new Rectangle(4, 5);
console.log('Прямоугольник:');
console.log('Площадь:', rectangle.calculateArea());
console.log('Периметр:', rectangle.calculatePerimeter());

const circle = new Circle(3);
console.log('Круг:');
console.log('Площадь:', circle.calculateArea().toFixed(2));
console.log('Периметр:', circle.calculatePerimeter().toFixed(2));

const triangle = new Triangle(3, 4, 5);
console.log('Треугольник:');
console.log('Площадь:', triangle.calculateArea());
console.log('Периметр:', triangle.calculatePerimeter());
