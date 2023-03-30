/*
    
*/

import Formation from './formation.js/.js'
import ListeEtablissements from './js/listeEtablissements.js'
import StatsEtablissement from './js/statsEtablissement.js'
import Progressbar from './js/progressbar.js'
import SearchFormation from './js/searchFormation.js'

riot.register("formation", Formation)
riot.register("listeEtablissements", ListeEtablissements)
riot.register("statsEtablissement", StatsEtablissement)
riot.register("progressbar", Progressbar )
riot.register("searchFormation", SearchFormation)


riot.mount("Formation")
riot.mount("ListeEtablissements")
riot.mount("StatsEtablissement")
riot.mount("Progressbar")
riot.mount("SearchFormation")