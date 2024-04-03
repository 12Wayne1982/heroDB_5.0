let data = [
    {id: 1, name: "Spider-Man", alterEgo: "Peter Parker", publisher: "Marvel Comics", firstAppearence: "Amazing Fantasy 15", publishingYear: 1963 , yearsActive: 61, createdBy: "Stan Lee & Steve Ditko" },
    {id: 2, name: "Batman", alterEgo: "Bruce Wayne", publisher: "DC Comics", firstAppearence: "Detective Comics 1", publishingYear: 1939 , yearsActive: 89, createdBy: "Bill Finger" },
];


// display all hereos
    function displayAllHeroes(){
        var tableData = document.querySelector(".table_data");
        var elements = '';

        // Die Daten aus dem Array data werden in Variable obj "gemapt".
        // Die Variable elements enthält Tabellenzeilen und die Tabellendaten Name und Email.
        data.map(obj => (
            elements += 
                `<tr> 
                    <td>${obj.name}</td>
                    <td>${obj.alterEgo}</td>
                    <td>${obj.publisher}</td>
                    <td>${obj.firstAppearence}</td>
                    <td>${obj.publishingYear}</td>
                    <td>${obj.yearsActive}</td>
                    <td>${obj.createdBy}</td>
                    <td>
                        <button onclick={showUpdateForm(${obj.id})}>Update</button>
                        <button onclick={deleteHero(${obj.id})}>Delete</button>
                    </td>
                </tr>`
        ))

        // Tabellenzeilen und Tabellendaten (elements) werden in tbody abgildet.
        tableData.innerHTML = elements;
    }

// delete hero
    function deleteHero(id){
        data = data.filter(d => d.id !== id);
        displayAllHeroes();
    }

// update hero
    // Übergabe der id und Auffüllung der Felder von Update Hero
    function showUpdateForm(id){

        document.querySelector('.table_card').style.display = "none";
        document.querySelector('.update_form').style.display = "block";

        // findIndex() returns the index of the first element that passes a test (provided by a function).
        var object = data.find(obj => obj.id === id);

        // Die Felder von Update Hero werden mit den Tabellendaten befüllt.
        document.querySelector(".id").value = object.id;
        document.querySelector(".uName").value = object.name;
        document.querySelector(".uAlterEgo").value = object.alterEgo;
        document.querySelector(".uPublisher").value = object.publisher;
        document.querySelector(".uFirstAppearence").value = object.firstAppearence;
        document.querySelector(".uPublishingYear").value = object.publishingYear;
        document.querySelector(".uYearsActive").value = object.yearsActive;
        document.querySelector(".uCreatedBy").value = object.createdBy;
    }

    function updateHero(){
        // Die Weter der geupdateten Eingabefelder werden in Variablen gespeichert.
        var id = parseInt(document.querySelector(".id").value);
        console.log(id);
        var name = document.querySelector(".uName").value;
        var alterEgo = document.querySelector(".uAlterEgo").value;
        var publisher = document.querySelector(".uPublisher").value;
        var firstAppearence = document.querySelector(".uFirstAppearence").value;
        var publishingYear = document.querySelector(".uPublishingYear").value;
        var yearsActive = document.querySelector(".uYearsActive").value;
        var createdBy = document.querySelector(".uCreatedBy").value;
        

        // findIndex() returns the index of the first element that passes a test (provided by a function).
        // In Variable index wird die id des Datensatzes gespeichert, der geändert werden soll.
        var index = data.findIndex(d => d.id === id);
        console.log(index);
        // Hier wird anhand der Variablen index der Datensatz gefunden und mit den Variablen,
        // die die geupdateten Eingabefelder gespeichert haben, befüllt.
        data[index] = {id, name, alterEgo, publisher, firstAppearence, publishingYear, yearsActive, createdBy};

        // Tabelle wird aktualisiert.
        

        document.querySelector('.update_form').style.display = "none";
        document.querySelector('.table_card').style.display = "block";

        displayAllHeroes();
    }


// create new hero

    function showCreateForm(){
        document.querySelector('.table_card').style.display = "none";
        document.querySelector('.create_form').style.display = "block";
    }

    function createNewHero(){

        var crName = document.querySelector(".name").value;
        var crAlterEgo = document.querySelector(".alterEgo").value;
        var crPublisher = document.querySelector(".publisher").value;
        var crFirstAppearence = document.querySelector(".firstAppearence").value;
        var crPublishingYear = document.querySelector(".publishingYear").value;
        var crYearsActive = document.querySelector(".yearsActive").value;
        var crCreatedBy = document.querySelector(".createdBy").value;

        // ein Array wird mit den create-Daten befüllt und in das data-Array gepusht
        var obj = {id: 3, name: crName, alterEgo: crAlterEgo, publisher: crPublisher, firstAppearence: crFirstAppearence, publishingYear: crPublishingYear , yearsActive: crYearsActive, createdBy: crCreatedBy}
        data.push(obj);

        // Tabelle wird aktualisiert.
        displayAllHeroes();

        // .create_form wird ausgeblendet und .table_card ausgeblendet
        document.querySelector('.create_form').style.display = "none";
        document.querySelector('.table_card').style.display = "block";


        // Die Inputfelder werden nach Eingabe von Daten geleert.
        document.querySelector(".name").value = "";
        document.querySelector(".alterEgo").value = "";
        document.querySelector(".publisher").value = "";
        document.querySelector(".firstAppearence").value = "";
        document.querySelector(".publishingYear").value = "";
        document.querySelector(".yearsActive").value = "";
        document.querySelector(".createdBy").value = "";
    }