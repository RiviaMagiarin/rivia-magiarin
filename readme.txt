Cuando tú escribes una URL en el navegador, por ejemplo riviamagiarin.art/cozy-witch, pasan estas cosas:
1. El navegador hace una petición
Le dice al servidor: "oye, quiero la página /cozy-witch"
2. Flask la recibe y busca la ruta
Mira en tu app.py qué función tiene el @app.route('/cozy-witch') y la ejecuta.
3. La función prepara la respuesta
pythondef cozy_witch():
    lang = request.args.get('lang', 'en')
    return render_template('cozy_witch.html', lang=lang)
Lee el idioma, coge la plantilla HTML, mete las variables dentro y genera el HTML final.
4. Flask se lo manda al navegador
El navegador recibe el HTML ya cocinado y lo muestra.
Es exactamente el mismo ciclo que en Spring Boot:

@app.route = @GetMapping
render_template = return "vista" con un ModelAndView
request.args = @RequestParam

La diferencia con PHP es que en PHP el archivo era la ruta, aquí tú defines las rutas explícitamente.


<!--Esto es la herencia. Le dice a Flask: "esta página hereda la estructura del base.html". Es como extends en Java. La página tendrá automáticamente la navegación, el footer, el CSS... todo lo que definimos en base.html.-->
{% extends 'base.html' %}

{% block title %}Rivia Magiarin - Art & Stories{% endblock %}

{% block content %}
<div class="hero">
    <h1>Rivia Magiarin</h1>
    <p>Art & Stories</p>
</div>
{% endblock %}



<!DOCTYPE html>
<!--{# #} → para comentarios que no aparecen en el HTML final-->
<!--{{ }} → para mostrar variables. Aquí lang es la variable que le pasamos desde Python con render_template('index.html', lang=lang). Flask la sustituye por en, es o gl según corresponda.-->
<html lang="{{ lang }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--{% %} → para lógica, como if y for. Esto es más especial. Es como un "hueco" que las páginas hijas van a rellenar. Por ejemplo la página de la Cozy Witch dirá "mete mi contenido en el hueco content".-->
    <title>{% block title %}Rivia Magiarin{% endblock %}</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
</head>
<body>

    <nav>
        <a href="/">Rivia Magiarin</a>
        <div class="nav-links">
            <a href="/cozy-witch">The Cozy Witch</a>
            <a href="/canary-feast">The Canary Feast</a>
            <a href="/octopus">Octopus</a>
        </div>
        <div class="lang-selector">
            <a href="?lang=en">EN</a>
            <a href="?lang=es">ES</a>
            <a href="?lang=gl">GL</a>
        </div>
    </nav>

    <main>
        {% block content %}{% endblock %}
    </main>

    <footer>
        <p>© 2025 Rivia Magiarin</p>
    </footer>

    <script src="{{ url_for('static', filename='js/main.js') }}"></script>
</body>
</html>