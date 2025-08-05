let studentsList = [{
        id: 1,
        name: 'Васисуалий',
        surename: 'Лоханкин',
        midllename: 'Андреевич',
        startLearn: 2024,
        birthDate: new Date(1970, 9, 15),
        faculty: 'Информатика',
    },
    {
        id: 2,
        name: 'Екатерина',
        surename: 'Аверченко',
        midllename: 'Спиридоновна',
        startLearn: 2023,
        birthDate: new Date(2003, 1, 3),
        faculty: 'Химия',
    },
    {
        id: 3,
        name: 'Геннадий',
        surename: 'Собакин',
        midllename: 'Кузьмич',
        startLearn: 2020,
        birthDate: new Date(1962, 10, 24),
        faculty: 'Оптика',
    },
    {
        id: 4,
        name: 'Остап',
        surename: 'Бендер',
        midllename: 'Ибрагимович',
        startLearn: 1995,
        birthDate: new Date(1905, 4, 12),
        faculty: 'Комбинаторика',
    },
    {
        id: 5,
        name: 'Ипполит',
        surename: 'Воробъянинов',
        midllename: 'Матвеевич',
        startLearn: 2021,
        birthDate: new Date(1897, 2, 28),
        faculty: 'Маркетинг',
    },
    {
        id: 6,
        name: 'Михаил',
        surename: 'Паниковский',
        midllename: 'Самуэлевич',
        startLearn: 2011,
        birthDate: new Date(1967, 2, 6),
        faculty: 'Маркетинг',
    },
    {
        id: 7,
        name: 'Карп',
        surename: 'Якин',
        midllename: 'Савельевич',
        startLearn: 2021,
        birthDate: new Date(1880, 8, 30),
        faculty: 'Оптика',
    }
]

// Полные ФИО
function getFullName(studentsList) {
    return studentsList.surename + ' ' + studentsList.name + ' ' + studentsList.midllename;
}

// Срок обучения
function getLearnPeriod(studentsList) {
    let currentDate = new Date();
    let learnTotal = currentDate.getFullYear() - studentsList.startLearn;
    let LearnPeriod = studentsList.startLearn + '-' + currentDate.getFullYear();
    let learnCours = `(${learnTotal + 1} курс)`;

    if (learnTotal > 4 || learnTotal === 4 && currentDate.getMonth() > 8) {
        LearnPeriod = `${studentsList.startLearn}-${studentsList.startLearn + 4}`;
        learnCours = '(окончил)';
    } else if (learnTotal <= 4 && currentDate.getMonth() < 8) {
        learnCours = '(' + learnTotal + ' курс)';
    } else if (learnTotal === 0 && currentDate.getMonth() > 8) {
        LearnPeriod = currentDate.getFullYear();
        learnCours = ' (1 курс)';
    }

    return LearnPeriod + ' ' + learnCours;
}

// Полное название колонки возраст
// Дата рождения в формате dd.mm.yyyy
function getBirthDateFormat(studentsList) {
    let yyyy = studentsList.birthDate.getFullYear();
    let mm = studentsList.birthDate.getMonth() + 1;
    let dd = studentsList.birthDate.getDate();

    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;

    return dd + '.' + mm + '.' + yyyy;
}

// Выисление возраста студента
function getAge(studentsList) {
    let today = new Date();
    let age = today.getFullYear() - studentsList.birthDate.getFullYear();
    let month = today.getMonth() - studentsList.birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < studentsList.birthDate.getDate())) {
        age--;
    }
    return age;
}

// Строковое слово к возрасту (год/года/лет)
function getAgeWord(studentsList) {
    let age = getAge(studentsList);
    if (age % 10 === 0 || age % 10 >= 5 || (10 < age % 100 && age % 100 < 20)) {
        return 'лет';
    } else if (age % 10 === 1) {
        return 'год';
    } else {
        return 'года';
    }
}
// Полуение полного названия колонки "Возраст"
function getBirthDateAgeWord(studentsList) {
    return getBirthDateFormat(studentsList) + ' (' + getAge(studentsList) + ' ' + getAgeWord(studentsList) + ')';
}

// Создание заголовка.
function createStudentListTitle(title) {
    let listTitle = document.createElement('h1');
    listTitle.innerHTML = title;
    return listTitle;
}

// Создание формы для ввода нового студента
function createNewStudentForm() {
    let studentForm = document.createElement('form');
    let formWrapper = document.createElement('div');
    let formColLeft = document.createElement('div');
    let formColRight = document.createElement('div');
    let labelSurename = document.createElement('label');
    let inputSurename = document.createElement('input');
    let labelName = document.createElement('label');
    let inputName = document.createElement('input');
    let labelMiddlename = document.createElement('label');
    let inputMiddlename = document.createElement('input');
    let labelStartLearn = document.createElement('label');
    let inputStartLearn = document.createElement('input');
    let labelBirthDate = document.createElement('label');
    let inputBirthDate = document.createElement('input');
    let labelFaculty = document.createElement('label');
    let inputFaculty = document.createElement('input');
    let inputWrapper = document.createElement('div')
    let formButton = document.createElement('button');

    inputBirthDate.setAttribute('type', 'date');
    inputSurename.setAttribute('data-surname', 'true');
    inputName.setAttribute('data-name', 'true');
    inputMiddlename.setAttribute('data-midllename', 'true');
    inputFaculty.setAttribute('data-faculty', 'true');
    inputStartLearn.setAttribute('data-startlearn', '2000');
    inputBirthDate.setAttribute('data-birthdate', '01.01.1900');

    formWrapper.classList.add('form-group', 'row');
    formColLeft.classList.add('col');
    formColRight.classList.add('col');
    inputSurename.classList.add('form-control', 'mb-3');
    inputName.classList.add('form-control', 'mb-3');
    inputMiddlename.classList.add('form-control', 'mb-3');
    inputStartLearn.classList.add('form-control', 'mb-3');
    inputBirthDate.classList.add('form-control', 'mb-3');
    inputFaculty.classList.add('form-control', 'mb-3');
    labelSurename.textContent = 'Фамилия студента:';
    inputSurename.placeholder = 'Введите фамилию студента';
    labelName.textContent = 'Имя студента:';
    inputName.placeholder = 'Введите имя студента';
    labelMiddlename.textContent = 'Отчество студента:';
    inputMiddlename.placeholder = 'Введите отчество студента';
    labelStartLearn.textContent = 'Год начала обучения:';
    inputStartLearn.placeholder = 'Введите год начала обучения';
    labelBirthDate.textContent = 'Дата рождения:';
    inputBirthDate.placeholder = 'Введите дату рождения';
    labelFaculty.textContent = 'Факультет:';
    inputFaculty.placeholder = 'Введите факультет';

    formButton.classList.add('btn', 'btn-primary', 'mb-4');
    formButton.textContent = 'Добавить нового студента';


    formWrapper.append(formColLeft);
    formColLeft.append(labelSurename);
    formColLeft.append(inputSurename);
    formColLeft.append(labelName);
    formColLeft.append(inputName);
    formColLeft.append(labelMiddlename);
    formColLeft.append(inputMiddlename);
    formWrapper.append(formColRight);
    formColRight.append(labelBirthDate);
    formColRight.append(inputBirthDate);
    formColRight.append(labelStartLearn);
    formColRight.append(inputStartLearn);
    formColRight.append(labelFaculty);
    formColRight.append(inputFaculty);
    studentForm.append(formWrapper);
    studentForm.append(formButton);

    return {
        studentForm,
        inputName,
        inputSurename,
        inputMiddlename,
        inputBirthDate,
        inputStartLearn,
        inputFaculty,
        formButton,
    }
}

// Вывода одного студента в таблицу
function getStudentItem(studentObj) {
    let studentsTable = document.getElementById('students-table');

    let studentsTableTR = document.createElement('tr');
    let tdFIO = document.createElement('td');
    let tdFaculty = document.createElement('td');
    let tdDateAge = document.createElement('td');
    let tdLearnTime = document.createElement('td');

    tdFIO.textContent = getFullName(studentObj);
    tdFaculty.textContent = studentObj.faculty;
    tdDateAge.textContent = getBirthDateAgeWord(studentObj);
    tdLearnTime.textContent = getLearnPeriod(studentObj);

    studentsTableTR.append(tdFIO);
    studentsTableTR.append(tdFaculty);
    studentsTableTR.append(tdDateAge);
    studentsTableTR.append(tdLearnTime);

    studentsTable.append(studentsTableTR);

    return {
        studentsTable,
        tdFIO,
        tdFaculty,
        tdDateAge,
        tdLearnTime,
    }
}

// Создание уникального id
function getNewID(studentsArray) {
    let max = 0;
    for (const item of studentsArray) {
        if (item.id > 0) {
            max = item.id
        }
    }
    return max + 1;
}

// Вывод всех студентов в таблицу
function renderStudentsTable(studentsArray) {
    for (let item of studentsArray) {
        getStudentItem(item);
    }
}

// Отрисовка DOM-дерева

document.addEventListener('DOMContentLoaded', () => {
    let containerStudentList = document.getElementById('students-list');
    let studentsListTitle = createStudentListTitle('Список студентов');
    let newStudentForm = createNewStudentForm();

    containerStudentList.prepend(newStudentForm.studentForm);
    containerStudentList.prepend(studentsListTitle);

    // Очистка полей формы
    let allInput = document.querySelectorAll('input');
    function cleanForm() {
        for (let input of allInput) {
            input.value = ''
        }
    }

    newStudentForm.studentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Добавление объекта студента в массив
        let newStudentObj = {
            id: getNewID(studentsList),
            name: newStudentForm.inputName.value,
            surename: newStudentForm.inputSurename.value,
            midllename: newStudentForm.inputMiddlename.value,
            startLearn: Number(newStudentForm.inputStartLearn.value),
            birthDate: newStudentForm.inputBirthDate.valueAsDate,
            faculty: newStudentForm.inputFaculty.value,
        }

        //Валидация полей формы
        function validationStudentForm(form) {

            function removeError(input) {
                let parent = input.parentNode;

                if (input.classList.contains('error')) {
                    parent.querySelector('.error-text').remove();
                    input.classList.remove('error');
                }
            }

            function createError(input, text) {
                let parent = input.parentNode;
                input.classList.add('error');
                let errorWarning = document.createElement('div');

                errorWarning.classList.add('error-text');
                errorWarning.textContent = text;
                parent.append(errorWarning);
            }

            let resultValidation = true;

            let allInput = document.querySelectorAll('input');

            for (let input of allInput) {

                removeError(input);

                let today = new Date();

                if (input.dataset.surname === 'true') {
                    if (input.value.trim() === '') {
                        removeError(input);
                        createError(input, 'Поле "Фамилия" не заполнено');
                        resultValidation = false;
                    }
                }

                if (input.dataset.name === 'true') {
                    if (input.value.trim() === '') {
                        removeError(input);
                        createError(input, 'Поле "Имя" не заполнено');
                        resultValidation = false;
                    }
                }

                if (input.dataset.midllename === 'true') {
                    if (input.value.trim() === '') {
                        removeError(input);
                        createError(input, 'Поле "Отчество" не заполнено');
                        resultValidation = false;
                    }
                }

                if (input.dataset.birthdate) {
                    if (input.value.trim() === '') {
                        removeError(input);
                        createError(input, 'Поле "Дата рождения" не заполнено');
                        resultValidation = false;
                    } else if (!(Date.parse(input.value) <= Date.parse(today) && Date.parse(input.value) >= Date.parse(input.dataset.birthdate))) {
                        removeError(input);
                        createError(input, 'Дата рождения должна быть в пределах от 01.01.1900 до текущей даты');
                        resultValidation = false;
                    }
                }

                if (input.dataset.startlearn) {
                    if (input.value.trim() === '') {
                        removeError(input);
                        createError(input, 'Введите год начала обучения');
                        resultValidation = false;
                    } else if (!(/^\d+$/.test(input.value))) {
                        removeError(input);
                        createError(input, 'Используйте только цифры в поле "Год начала обучения"');
                        resultValidation = false;
                    } else if (input.dataset.startlearn > Number(input.value) || Number(input.value) > today.getFullYear()) {
                        removeError(input);
                        createError(input, 'Год начала обучения в диапазоне от 2000-го по текущий год');
                        resultValidation = false;
                    }
                }

                if (input.dataset.faculty === 'true') {
                    if (input.value.trim() === '') {
                        removeError(input);
                        createError(input, 'Поле "Факультет" не заполнено');
                        resultValidation = false;
                    }
                }

            }

            return resultValidation;

        }

        if (validationStudentForm(newStudentForm.studentForm) === true) {
            studentsList.push(newStudentObj);
            getStudentItem(newStudentObj);
            newArr = [...studentsList];
            cleanForm();
            setTimeout(() => {
                alert('Форма проверена успешно! Данные студента добавлены в таблицу.');
            }, 300)
        }
    })

    // Очистка таблицы
    function cleanTable() {
        let studentsTable = document.getElementById('students-table');
        // while (studentsTable.firstChild) {
        //     studentsTable.removeChild(studentsTable.firstChild);
        // }
        studentsTable.innerHTML = '';
    }

    // Фильтрация списка
    // Общая ф-ия фильтрации
    function filter(arr, prop, value) {
        let result = [],
            copyArr = [...arr];
        for (let item of copyArr) {
            if (String(item[prop]).includes(value) === true) result.push(item);
        }
        return result;
    }

    // Создание отфильтрованного списка студентов
    let newArr = [...studentsList];

    function renderStudentsTableFilter(arr) {
        cleanTable();

        const fioVal = document.getElementById('fio-filter').value,
            facultyVal = document.getElementById('faculty-filter').value,
            learnStartVal = document.getElementById('learn-start-filter').value,
            learnEndtVal = document.getElementById('learn-end-filter').value;

        newArr = [...arr];
        for (const item of newArr) {
            item.fio = getFullName(item);
        }

        if (fioVal !== '') newArr = filter(newArr, 'fio', fioVal);
        if (facultyVal !== '') newArr = filter(newArr, 'faculty', facultyVal);
        if (learnStartVal !== '') newArr = filter(newArr, 'startLearn', learnStartVal);
        if (learnEndtVal !== '') newArr = filter(newArr, 'startLearn', learnEndtVal - 4);

        renderStudentsTable(newArr);
    }

    let formFilter = document.getElementById('form-filter');
    formFilter.addEventListener('submit', function (event) {
        event.preventDefault();
        cleanTable();
        renderStudentsTableFilter(studentsList);
    })

    // Очистка полей фильтрации
    document.getElementById('btn-clean').addEventListener('click', function () {
        let allInpFilter = formFilter.querySelectorAll('input');
        for (const item of allInpFilter) {
            item.value = '';
        }
        renderStudentsTableFilter(studentsList);
    })

    // Сортировка таблицы студентов
    // Общая ф-ия сортировки
    function sortStudens(arr, prop, dir = false) {
        let result = arr.sort(function (a, b) {
            dirWay = a[prop] < b[prop];
            if (dir === true) dirWay = a[prop] > b[prop];
            if (dirWay === true) return -1;
        });
        return result;
    }

    let fioSort = document.getElementById('fio');
    let facultySort = document.getElementById('faculty');
    let dateAgeSort = document.getElementById('date-age');
    let learnTimeSort = document.getElementById('learn-time');
    fioSort.classList.add('head-title');
    facultySort.classList.add('head-title');
    dateAgeSort.classList.add('head-title');
    learnTimeSort.classList.add('head-title');
    let sortWay = true;

    

    fioSort.addEventListener('click', function () {
        sortWay = !sortWay;
        sortStudens(newArr, 'surename', sortWay);
        cleanTable();
        renderStudentsTable(newArr);
    })

    facultySort.addEventListener('click', function () {
        sortWay = !sortWay;
        sortStudens(newArr, 'faculty', sortWay);
        cleanTable();
        renderStudentsTable(newArr);
    })

    dateAgeSort.addEventListener('click', function () {
        sortWay = !sortWay;
        sortStudens(newArr, 'birthDate', sortWay);
        cleanTable();
        renderStudentsTable(newArr);
    })

    learnTimeSort.addEventListener('click', function () {
        sortWay = !sortWay;
        sortStudens(newArr, 'startLearn', sortWay);
        cleanTable();
        renderStudentsTable(newArr);
    })

    renderStudentsTable(studentsList);
})