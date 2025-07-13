var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

let currentDirectory = "";

setTimeout(function () {
    loopLines(banner, "", 80);
    textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

console.log(
    "%cYou hacked my password!, what did you think it was?",
    "color: #04ff00; font-weight: bold; font-size: 24px;"
);

console.log("%cPassword: '" + password + "' - Congradulations, bruh!", "color: grey");

textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
    if (e.keyCode == 181) {
        document.location.reload(true);
    }
    if (pw) {
        let et = "*";
        let w = textarea.value.length;
        command.innerHTML = et.repeat(w);
        if (textarea.value === password) {
            pwd = true;
        }
        if (pwd && e.keyCode == 13) {
            loopLines(secret, "color2 margin", 120);
            command.innerHTML = "";
            textarea.value = "";
            pwd = false;
            pw = false;
            liner.classList.remove("password");
        } else if (e.keyCode == 13) {
            addLine("Wrong password", "error", 0);
            command.innerHTML = "";
            textarea.value = "";
            pw = false;
            liner.classList.remove("password");
        }
    } else {
        if (e.keyCode == 13) {
            commands.push(command.innerHTML);
            git = commands.length;

            if (currentDirectory === "scripts") {
                addLine("🗲@Browsercom$~SYSTEM~$MasterJudah⚚:~/scripts➤ " + command.innerHTML, "no-animation", 0);
            } else {
                addLine("🗲@Browsercom$~SYSTEM~$MasterJudah⚚:~➤ " + command.innerHTML, "no-animation", 0);
            }
            commander(command.innerHTML.toLowerCase());
            command.innerHTML = "";
            textarea.value = "";
        }

        if (e.keyCode == 38 && git != 0) {
            git -= 1;
            textarea.value = commands[git];
            command.innerHTML = textarea.value;
        }
        if (e.keyCode == 40 && git != commands.length) {
            git += 1;
            if (commands[git] === undefined) {
                textarea.value = "";
            } else {
                textarea.value = commands[git];
            }
            command.innerHTML = textarea.value;
        }
    }
}

// Line commands
function commander(cmd) {
    switch (cmd.toLowerCase()) {
        
        case "exit":
            addLine("Exiting terminal...", "color2", 80);
            setTimeout(() => {
                const closed = window.close();
                if (!closed) {
                    addLine("Unable to close tab automatically. Please close it manually.", "color2", 80);
                }
            }, 1000);
            break;

        
        case "oops":
            loopLines(oops, "color2 margin", 80);
            break;

        case "neofetch":
            loopLines(neofetch, "color2 margin", 80);
            break;

        case "socials":
            loopLines(socials, "color2 margin", 80);
            break;
            
        case "projects":
            loopLines(projects, "color2 margin", 80);
            break;

        case "history":
            addLine("", 0)
            loopLines(commands, "color2", 80);
            addLine("<br>", "command", 80 * commands.length + 50);
            break;

        case "email":
            addLine('Opening mailto:<a href="mailto:mastdev.developer.1959@gmail.com">mastdev.developer.1959@gmail.com</a>...', "color2", 80);
            setTimeout(() => {
                window.location.href = "mailto:mastdev.developer.1959@gmail.com";
            }, 1000);
            break;

        case "clear":
            setTimeout(function () {
                terminal.innerHTML = '<a id = "before"></a>';
                before = document.getElementById("before");
            }, 1);
        case "banner":
            loopLines(banner, "color2 margin", 80);
            break;
        
        case "asciiart":
            loopLines(asciiart, "color2 margin", 80);
            break;

        // socials
        case "youtube":
            addLine("Opening Youtube...", "color2", 80);
            newTab(youtube);
            break;
        case "linkedIn":
            addLine("Opening LinkedIn...", "color2", 80);
            newTab(linkedIn);
            break;
        case "github":
            addLine("Opening Github...", "color2", 80);
            newTab(github);
            break;
        case "twitter":
            addLine("Opening twitter...", "color2", 80);
            newTab(twitter);
            break;
        case "instagram":
            addLine("Opening Instagram...", "color2", 80);
            newTab(instagram);
            break;

        // linux command
        case "help":
            loopLines(help, "color2 margin", 80);
            break;

        case "whois":
            loopLines(whois, "color2 margin", 80);
            break;

        case "whoami":
            loopLines(whoami, "color2 margin", 80);
            break;

        case "sudo":
            loopLines(sudo, "color2 margin", 80);
            break;
        
        case "sudo_apt_update":
            loopLines(sudo_apt_update, "color2 margin", 80);
            break;

        case "sudo_apt_upgrade":
            loopLines(sudo_apt_upgrade, "color2 margin", 80);
            break;

        case "y":
            loopLines(y, "color2 margin", 80);
            break;
        
        case "n":
            loopLines(n, "color2 margin", 80);
            break;

        case "secret":
            liner.classList.add("password");
            pw = true;
            break;

        case "cls":
            setTimeout(function () {
                terminal.innerHTML = '<a id = "before"></a>';
                before = document.getElementById("before");
            }, 1);

        case "anime":
            loopLines(anime, "color2 margin", 80);
            break;

        case "music":
            loopLines(music, "color2 margin", 80);
            break;

        case "company":
            loopLines(company, "color2 margin", 80);
            break;

        case "guitar":
            loopLines(guitar, "color2 margin", 80);
            break;

        case "heaven":
            loopLines(heaven, "color2 margin", 80);
            break;

        case "notation":
            loopLines(notation, "color2 margin", 80);
            break;

        case "beatles":
            loopLines(beatles, "color2 margin", 80);
            break;

        case "nature":
            loopLines(nature, "color2 margin", 80);
            break;
            
        case "island":
            loopLines(island, "color2 margin", 80);
            break;
         
        case "mountain":
            loopLines(mountain, "color2 margin", 80);
            break;

        case "sky":
            loopLines(sky, "color2 margin", 80);
            break;

        case "mythology":
            loopLines(mythology, "color2 margin", 80);
            break;

        case "dragon":
            loopLines(dragon, "color2 margin", 80);
            break;

        case "unicorn":
            loopLines(unicorn, "color2 margin", 80);
            break;

        case "myth":
            loopLines(myth, "color2 margin", 80);
            break;
        
        case "movies":
            loopLines(movies, "color2 margin", 80);
            break;
        
        case "religion":
            loopLines(religion, "color2 margin", 80);
            break;
        
        case "e4horse":
            loopLines(e4horse, "color2 margin", 80);
            break;

        case "grail":
            loopLines(grail, "color2 margin", 80);
            break;
        
        case "cross":
            loopLines(cross, "color2 margin", 80);
            break;

        case "bible":
            loopLines(bible, "color2 margin", 80);
            break;

        case "computer":
            loopLines(computer, "color2 margin", 80);
            break;

        case "computer1":
            loopLines(computer1, "color2 margin", 80);
            break;

        case "console":
            loopLines(console, "color2 margin", 80);
            break;
        
        case "computer3":
            loopLines(computer3, "color2 margin", 80);
            break;

        case "computer4":
            loopLines(computer4, "color2 margin", 80);
            break;

        case "keyboard1":
            loopLines(keyboard1, "color2 margin", 80);
            break;

        case "keyboard2":
            loopLines(keyboard2, "color2 margin", 80);
            break;

        case "amiga":
            loopLines(amiga, "color2 margin", 80);
            break;

        case "masterjudah":
            loopLines(masterjudah, "color2 margin", 80);
            break;
            
        case "neovim":
            loopLines(neovim, "color2 margin", 80);
            break;

        case "pubg":
            loopLines(pubg, "color2 margin", 80);
            break;
        

        case "pwd":
            if (currentDirectory === "scripts"){
                addLine("/home/user/client/scripts", "color2", 0);
            } else {
                addLine("/home/user/client/", "color2", 0);
            }
            break;

        
        default:
            addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
    }
}

function newTab(link) {
    setTimeout(function () {
        window.open(link, "_blank");
    }, 500);
}

function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }
    setTimeout(function () {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;
        before.parentNode.insertBefore(next, before);
        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function loopLines(name, style, time) {
    name.forEach(function (item, index) {
        addLine(item, style, index * time);
    });
}
