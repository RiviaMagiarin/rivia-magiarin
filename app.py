'''Importamos Flask, y dos herramientas de Flask: render_template (para mostrar páginas HTML) y request (para leer lo que nos manda el navegador).'''
from flask import Flask, render_template, request

'''Creamos la aplicación. Es como instanciar una clase en Java: App app = new App(). El __name__ le dice a Flask dónde está el proyecto.'''
app = Flask(__name__)

# Idiomas disponibles
LANGUAGES = ['en', 'es', 'gl']

'''Esto es lo más importante. El @app.route('/') es como el @GetMapping("/") de Spring Boot. Le dice a Flask: "cuando alguien entre en la página principal, ejecuta la función index".'''
@app.route('/', methods=['GET'])
def index():
    '''Lee el idioma de la URL (por ejemplo /?lang=es). Si no viene ninguno, usa inglés por defecto. Si viene uno que no existe, también usa inglés.'''
    lang = request.args.get('lang', 'en')
    if lang not in LANGUAGES:
        lang = 'en'
    '''Le manda el idioma elegido a la página HTML para que pueda usarlo.'''
    return render_template('index.html', lang=lang)

@app.route('/cozy-witch', methods=['GET'])
def cozy_witch():
    lang = request.args.get('lang', 'en')
    if lang not in LANGUAGES:
        lang = 'en'
    return render_template('cozy_witch.html', lang=lang)

@app.route('/canary-feast', methods=['GET'])
def canary_feast():
    return render_template('canary_feast.html')

@app.route('/octopus', methods=['GET'])
def octopus():
    return render_template('octopus.html')

@app.route('/privacy', methods=['GET'])
def privacy():
    lang = request.args.get('lang', 'en')
    if lang not in LANGUAGES:
        lang = 'en'
    return render_template('privacy.html', lang=lang)

@app.route('/cookies', methods=['GET'])
def cookies():
    lang = request.args.get('lang', 'en')
    if lang not in LANGUAGES:
        lang = 'en'
    return render_template('cookies.html', lang=lang)

if __name__ == '__main__':
    app.run(debug=True)