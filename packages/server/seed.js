"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var books = [
    {
        id: "9780142410349",
        name: "Fantastic Mr. Fox",
        price: 12,
        description: "A clever fox outsmarts three farmers to provide food for his family.",
        coverImage: "https://covers.openlibrary.org/b/id/240727-M.jpg",
        author: "Roald Dahl",
        pages: 96,
        categories: ["Children's Literature"],
    },
    {
        id: "9780743273565",
        name: "The Great Gatsby",
        price: 10,
        description: "A novel about the American dream and the roaring twenties.",
        coverImage: "https://covers.openlibrary.org/b/id/7222246-M.jpg",
        author: "F. Scott Fitzgerald",
        pages: 180,
        categories: ["Classic"],
    },
    {
        id: "9780061120084",
        name: "To Kill a Mockingbird",
        price: 8,
        description: "A story of racial injustice and childhood innocence in the Deep South.",
        coverImage: "https://covers.openlibrary.org/b/id/8225265-M.jpg",
        author: "Harper Lee",
        pages: 281,
        categories: ["Classic"],
    },
    {
        id: "9780451524935",
        name: "1984",
        price: 9,
        description: "A dystopian novel about totalitarianism and surveillance.",
        coverImage: "https://covers.openlibrary.org/b/id/153541-M.jpg",
        author: "George Orwell",
        pages: 328,
        categories: ["Dystopian"],
    },
    {
        id: "9780141439518",
        name: "Pride and Prejudice",
        price: 11,
        description: "A romantic novel that critiques the British landed gentry.",
        coverImage: "https://covers.openlibrary.org/b/id/8091016-M.jpg",
        author: "Jane Austen",
        pages: 279,
        categories: ["Romance"],
    },
    {
        id: "9781503280786",
        name: "Moby-Dick",
        price: 13,
        description: "The narrative of Captain Ahab's obsessive quest to kill a giant white whale.",
        coverImage: "https://covers.openlibrary.org/b/id/5551236-M.jpg",
        author: "Herman Melville",
        pages: 635,
        categories: ["Adventure"],
    },
    {
        id: "9781400079988",
        name: "War and Peace",
        price: 15,
        description: "A novel that intertwines the lives of families during the Napoleonic Wars.",
        coverImage: "https://covers.openlibrary.org/b/id/8231991-M.jpg",
        author: "Leo Tolstoy",
        pages: 1225,
        categories: ["Historical Fiction"],
    },
    {
        id: "9780316769488",
        name: "The Catcher in the Rye",
        price: 9,
        description: "A story about teenage rebellion and angst.",
        coverImage: "https://covers.openlibrary.org/b/id/8231992-M.jpg",
        author: "J.D. Salinger",
        pages: 214,
        categories: ["Classic"],
    },
    {
        id: "9780618260300",
        name: "The Hobbit",
        price: 10,
        description: "A fantasy novel about the adventures of Bilbo Baggins.",
        coverImage: "https://covers.openlibrary.org/b/id/8231993-M.jpg",
        author: "J.R.R. Tolkien",
        pages: 310,
        categories: ["Fantasy"],
    },
    {
        id: "9780486415871",
        name: "Crime and Punishment",
        price: 14,
        description: "A psychological novel exploring morality and redemption.",
        coverImage: "https://covers.openlibrary.org/b/id/8231994-M.jpg",
        author: "Fyodor Dostoevsky",
        pages: 671,
        categories: ["Classic"],
    },
    {
        id: "9780374528379",
        name: "The Brothers Karamazov",
        price: 16,
        description: "A philosophical novel about faith, doubt, and free will.",
        coverImage: "https://covers.openlibrary.org/b/id/8231995-M.jpg",
        author: "Fyodor Dostoevsky",
        pages: 824,
        categories: ["Classic"],
    },
    {
        id: "9780060850524",
        name: "Brave New World",
        price: 12,
        description: "A dystopian novel about a technologically advanced future society.",
        coverImage: "https://covers.openlibrary.org/b/id/8231996-M.jpg",
        author: "Aldous Huxley",
        pages: 268,
        categories: ["Dystopian"],
    },
];
var authors = [
    {
        id: "OL34184A",
        name: "Roald Dahl",
        dateOfBirth: new Date("1916-09-13T00:00:00Z"),
    },
    {
        id: "OL262283A",
        name: "F. Scott Fitzgerald",
        dateOfBirth: new Date("1896-09-24T00:00:00Z"),
    },
    {
        id: "OL31765A",
        name: "Harper Lee",
        dateOfBirth: new Date("1926-04-28T00:00:00Z"),
    },
    {
        id: "OL38298A",
        name: "George Orwell",
        dateOfBirth: new Date("1903-06-25T00:00:00Z"),
    },
    {
        id: "OL15136A",
        name: "Jane Austen",
        dateOfBirth: new Date("1775-12-16T00:00:00Z"),
    },
    {
        id: "OL18319A",
        name: "Herman Melville",
        dateOfBirth: new Date("1819-08-01T00:00:00Z"),
    },
    {
        id: "OL18923A",
        name: "Leo Tolstoy",
        dateOfBirth: new Date("1828-09-09T00:00:00Z"),
    },
    {
        id: "OL24636A",
        name: "J.D. Salinger",
        dateOfBirth: new Date("1919-01-01T00:00:00Z"),
    },
    {
        id: "OL26320A",
        name: "J.R.R. Tolkien",
        dateOfBirth: new Date("1892-01-03T00:00:00Z"),
    },
    {
        id: "OL23497A",
        name: "Fyodor Dostoevsky",
        dateOfBirth: new Date("1821-11-11T00:00:00Z"),
    },
    {
        id: "OL21620A",
        name: "Aldous Huxley",
        dateOfBirth: new Date("1894-07-26T00:00:00Z"),
    },
];
console.log(authors);
var prisma = new client_1.PrismaClient();
function createBooks() {
    return __awaiter(this, void 0, void 0, function () {
        var _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _loop_1 = function (i) {
                        var book, author_name, author;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    book = books[i];
                                    author_name = book.author;
                                    author = authors.find(function (a) {
                                        return a.name == book.author;
                                    });
                                    return [4 /*yield*/, prisma.book.create({
                                            data: __assign(__assign({}, book), { author: {
                                                    connectOrCreate: {
                                                        create: __assign({}, author),
                                                        where: {
                                                            id: author.id,
                                                            name: author_name,
                                                        },
                                                    },
                                                }, categories: {
                                                    connectOrCreate: book.categories.map(function (name) {
                                                        return {
                                                            where: {
                                                                name: name,
                                                            },
                                                            create: {
                                                                name: name,
                                                            },
                                                        };
                                                    }),
                                                } }),
                                        })];
                                case 1:
                                    _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < books.length)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(i)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
createBooks();
