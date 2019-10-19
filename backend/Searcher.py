import googlemaps
import pprint
import time
import json
from apikey import get_key

class Searcher:
    def __init__(self, location, distance): 
        self.current_location = location
        self.distance = distance
        self.gmaps = googlemaps.Client(key = get_key())

    def search(self, type, isOpen):
        places_result = self.gmaps.places_nearby(location = self.current_location, radius = self.distance, type = type)
        return self.arr_maker(places_result)

    def arr_maker(self, places_result):
        master_array = [[],[],[],[]]
        '''Instead of array  make into dict and then a json file via json.dump'''
        for element in places_result['results']:
            master_array[0].append(element['name'])
            master_array[1].append(element['vicinity'])
            master_array[2].append(element['price_level'])
            master_array[3].append(element['rating'])
            
        return master_array
        

