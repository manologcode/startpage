        // Configuración de enlaces
        const linkGroups = {
            "IAs": {
                "ChatGPT": "https://chat.openai.com",
                "Mistral": "https://chat.mistral.ai",
                "Gemini": "https://gemini.google.com",
                "Grok": "https://x.com/i/grok"
            },
            "Favoritos": {
                "Gmail": "https://mail.google.com",
                "YouTube": "https://youtube.com",
                "Calendar": "https://calendar.google.com",
                "Traductor": "https://translate.google.es/?hl=es&sl=en&tl=es&op=translate",
                "Whatsapp": "https://web.whatsapp.com/"
            },
            "Mi Cosas": {
                "notas": "https://notas.manolog.es",
                "enlaces": "https://enlaces.manolog.es",
                "tareas": "https://tasks.manolog.es",
            }
        };

        // Motores de búsqueda
        const searchEngines = {
            google: "https://www.google.com/search?q=",
            perplexity: "https://www.perplexity.ai/search?q=",
            bing: "https://www.bing.com/search?q="
        };

        // Función de búsqueda
        function search(engine) {
            const query = document.getElementById('searchInput').value;
            if (query) {
                window.location.href = searchEngines[engine] + encodeURIComponent(query);
            }
        }

        // Generar grupos de enlaces
        function generateLinkGroups() {
            const container = document.getElementById('linksContainer');
            
            for (const [groupName, links] of Object.entries(linkGroups)) {
                const groupDiv = document.createElement('div');
                groupDiv.className = 'links-container p-4';
                
                const title = document.createElement('h2');
                title.className = 'text-xl font-semibold mb-4 text-gray-700';
                title.textContent = groupName;
                
                const linksList = document.createElement('div');
                linksList.className = 'flex flex-col space-y-2';
                
                for (const [linkName, url] of Object.entries(links)) {
                    const link = document.createElement('a');
                    link.href = url;
                    link.className = 'text-blue-600 hover:text-blue-800 transition-colors';
                    link.textContent = linkName;
                    linksList.appendChild(link);
                }
                
                groupDiv.appendChild(title);
                groupDiv.appendChild(linksList);
                container.appendChild(groupDiv);
            }
        }

        // Evento para buscar al presionar Enter
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                search('perplexity'); // Por defecto busca en Google
            }
        });

        generateLinkGroups();