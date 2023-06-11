interface rs {
    pos: string,
    no: number,
    driver: string,
    car: string,
    laps: number,
    time: string,
    pts: number,
}

export interface IRaceResultsData {
    year: number;
    grandpix: string;
    results: rs[];
}

export const data: IRaceResultsData[] = [
    {
        year: 2023,
        grandpix: 'Bahrain',
        results: [
            {
                "pos": "1",
                "no": 1,
                "driver": "Max Verstappen",
                "car": "Red Bull Racing Honda RBPT",
                "laps": 57,
                "time": "1:33:56.736",
                "pts": 25
            },
            {
                "pos": "2",
                "no": 11,
                "driver": "Sergio Perez",
                "car": "Red Bull Racing Honda RBPT",
                "laps": 57,
                "time": "+11.987s",
                "pts": 18
            },
            {
                "pos":'3',
                "no": 14,
                "driver": "Fernando Alonso",
                "car": "Aston Martin Aramco Mercedes",
                "laps": 57,
                "time": "+38.637s",
                "pts": 15
            },
            {
                "pos": '4',
                "no": 55,
                "driver": "Carlos Sainz",
                "car": "Ferrari",
                "laps": 57,
                "time": "+48.052s",
                "pts": 12
            },
            {
                "pos": '5',
                "no": 44,
                "driver": "Lewis Hamilton",
                "car": "Mercedes",
                "laps": 57,
                "time": "+50.977s",
                "pts": 10
            },
            {
                "pos": '6',
                "no": 18,
                "driver": "Lance Stroll",
                "car": "Aston Martin Aramco Mercedes",
                "laps": 57,
                "time": "+54.502s",
                "pts": 8
            },
            {
                "pos": '7',
                "no": 63,
                "driver": "George Russell",
                "car": "Mercedes",
                "laps": 57,
                "time": "+55.873s",
                "pts": 6
            },
            {
                "pos": '8',
                "no": 77,
                "driver": "Valtteri Bottas",
                "car": "Alfa Romeo Ferrari",
                "laps": 57,
                "time": "+72.647s",
                "pts": 4
            },
            {
                "pos": '9',
                "no": 10,
                "driver": "Pierre Gasly",
                "car": "Alpine Renault",
                "laps": 57,
                "time": "+73.753s",
                "pts": 2
            },
            {
                "pos": '10',
                "no": 23,
                "driver": "Alexander Albon",
                "car": "Williams Mercedes",
                "laps": 57,
                "time": "+89.774s",
                "pts": 1
            },
            {
                "pos": '11',
                "no": 22,
                "driver": "Yuki Tsunoda",
                "car": "AlphaTauri Honda RBPT",
                "laps": 57,
                "time": "+90.870s",
                "pts": 0
            },
            {
                "pos": '12',
                "no": 2,
                "driver": "Logan Sargeant",
                "car": "Williams Mercedes",
                "laps": 56,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '13',
                "no": 20,
                "driver": "Kevin Magnussen",
                "car": "Haas Ferrari",
                "laps": 56,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '14',
                "no": 21,
                "driver": "Nyck De Vries",
                "car": "AlphaTauri Honda RBPT",
                "laps": 56,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '15',
                "no": 27,
                "driver": "Nico Hulkenberg",
                "car": "Haas Ferrari",
                "laps": 56,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '16',
                "no": 24,
                "driver": "Zhou Guanyu",
                "car": "Alfa Romeo Ferrari",
                "laps": 56,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '17',
                "no": 4,
                "driver": "Lando Norris",
                "car": "McLaren Mercedes",
                "laps": 55,
                "time": "+2 laps",
                "pts": 0
            },
            {
                "pos": "NC",
                "no": 31,
                "driver": "Esteban Ocon",
                "car": "Alpine Renault",
                "laps": 41,
                "time": "DNF",
                "pts": 0
            },
            {
                "pos": "NC",
                "no": 16,
                "driver": "Charles Leclerc",
                "car": "Ferrari",
                "laps": 39,
                "time": "DNF",
                "pts": 0
            },
            {
                "pos": "NC",
                "no": 81,
                "driver": "Oscar Piastri",
                "car": "McLaren Mercedes",
                "laps": 13,
                "time": "DNF",
                "pts": 0
            }
        ],
    }, {
        year: 2023,
        grandpix: 'Saudi Arabia',
        results: [
            {
                "pos": '1',
                "no": 11,
                "driver": "Sergio Perez",
                "car": "Red Bull Racing Honda RBPT",
                "laps": 50,
                "time": "1:21:14.894",
                "pts": 25
            },
            {
                "pos": '2',
                "no": 1,
                "driver": "Max Verstappen",
                "car": "Red Bull Racing Honda RBPT",
                "laps": 50,
                "time": "+5.355s",
                "pts": 19
            },
            {
                "pos": '3',
                "no": 14,
                "driver": "Fernando Alonso",
                "car": "Aston Martin Aramco Mercedes",
                "laps": 50,
                "time": "+20.728s",
                "pts": 15
            },
            {
                "pos": '4',
                "no": 63,
                "driver": "George Russell",
                "car": "Mercedes",
                "laps": 50,
                "time": "+25.866s",
                "pts": 12
            },
            {
                "pos": '5',
                "no": 44,
                "driver": "Lewis Hamilton",
                "car": "Mercedes",
                "laps": 50,
                "time": "+31.065s",
                "pts": 10
            },
            {
                "pos": '6',
                "no": 55,
                "driver": "Carlos Sainz",
                "car": "Ferrari",
                "laps": 50,
                "time": "+35.876s",
                "pts": 8
            },
            {
                "pos": '7',
                "no": 16,
                "driver": "Charles Leclerc",
                "car": "Ferrari",
                "laps": 50,
                "time": "+43.162s",
                "pts": 6
            },
            {
                "pos": '8',
                "no": 31,
                "driver": "Esteban Ocon",
                "car": "Alpine Renault",
                "laps": 50,
                "time": "+52.832s",
                "pts": 4
            },
            {
                "pos": '9',
                "no": 10,
                "driver": "Pierre Gasly",
                "car": "Alpine Renault",
                "laps": 50,
                "time": "+54.747s",
                "pts": 2
            },
            {
                "pos": '10',
                "no": 20,
                "driver": "Kevin Magnussen",
                "car": "Haas Ferrari",
                "laps": 50,
                "time": "+64.826s",
                "pts": 1
            },
            {
                "pos": '11',
                "no": 22,
                "driver": "Yuki Tsunoda",
                "car": "AlphaTauri Honda RBPT",
                "laps": 50,
                "time": "+67.494s",
                "pts": 0
            },
            {
                "pos": '12',
                "no": 27,
                "driver": "Nico Hulkenberg",
                "car": "Haas Ferrari",
                "laps": 50,
                "time": "+70.588s",
                "pts": 0
            },
            {
                "pos": '13',
                "no": 24,
                "driver": "Zhou Guanyu",
                "car": "Alfa Romeo Ferrari",
                "laps": 50,
                "time": "+76.060s",
                "pts": 0
            },
            {
                "pos": '14',
                "no": 21,
                "driver": "Nyck De Vries",
                "car": "AlphaTauri Honda RBPT",
                "laps": 50,
                "time": "+77.478s",
                "pts": 0
            },
            {
                "pos": '15',
                "no": 81,
                "driver": "Oscar Piastri",
                "car": "McLaren Mercedes",
                "laps": 50,
                "time": "+85.021s",
                "pts": 0
            },
            {
                "pos": '16',
                "no": 2,
                "driver": "Logan Sargeant",
                "car": "Williams Mercedes",
                "laps": 50,
                "time": "+86.293s",
                "pts": 0
            },
            {
                "pos": '17',
                "no": 4,
                "driver": "Lando Norris",
                "car": "McLaren Mercedes",
                "laps": 50,
                "time": "+86.445s",
                "pts": 0
            },
            {
                "pos": '18',
                "no": 77,
                "driver": "Valtteri Bottas",
                "car": "Alfa Romeo Ferrari",
                "laps": 49,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": "NC",
                "no": 23,
                "driver": "Alexander Albon",
                "car": "Williams Mercedes",
                "laps": 27,
                "time": "DNF",
                "pts": 0
            },
            {
                "pos": "NC",
                "no": 18,
                "driver": "Lance Stroll",
                "car": "Aston Martin Aramco Mercedes",
                "laps": 16,
                "time": "DNF",
                "pts": 0
            }
        ],
    }, {
        year: 2023,
        grandpix: 'Australia',
        results: [
            {
                "pos": '1',
                "no": 1,
                "driver": "Max Verstappen",
                "car": "Red Bull Racing Honda RBPT",
                "laps": 58,
                "time": "2:32:38.371",
                "pts": 25
            },
            {
                "pos": '2',
                "no": 44,
                "driver": "Lewis Hamilton",
                "car": "Mercedes",
                "laps": 58,
                "time": "+0.179s",
                "pts": 18
            },
            {
                "pos": '3',
                "no": 14,
                "driver": "Fernando Alonso",
                "car": "Aston Martin Aramco Mercedes",
                "laps": 58,
                "time": "+0.769s",
                "pts": 15
            },
            {
                "pos": '4',
                "no": 18,
                "driver": "Lance Stroll",
                "car": "Aston Martin Aramco Mercedes",
                "laps": 58,
                "time": "+3.082s",
                "pts": 12
            },
            {
                "pos": '5',
                "no": 11,
                "driver": "Sergio Perez",
                "car": "Red Bull Racing Honda RBPT",
                "laps": 58,
                "time": "+3.320s",
                "pts": 11
            },
            {
                "pos": '6',
                "no": 4,
                "driver": "Lando Norris",
                "car": "McLaren Mercedes",
                "laps": 58,
                "time": "+3.701s",
                "pts": 8
            },
            {
                "pos": '7',
                "no": 27,
                "driver": "Nico Hulkenberg",
                "car": "Haas Ferrari",
                "laps": 58,
                "time": "+4.939s",
                "pts": 6
            },
            {
                "pos": '8',
                "no": 81,
                "driver": "Oscar Piastri",
                "car": "McLaren Mercedes",
                "laps": 58,
                "time": "+5.382s",
                "pts": 4
            },
            {
                "pos": '9',
                "no": 24,
                "driver": "Zhou Guanyu",
                "car": "Alfa Romeo Ferrari",
                "laps": 58,
                "time": "+5.713s",
                "pts": 2
            },
            {
                "pos": '10',
                "no": 22,
                "driver": "Yuki Tsunoda",
                "car": "AlphaTauri Honda RBPT",
                "laps": 58,
                "time": "+6.052s",
                "pts": 1
            },
            {
                "pos": '11',
                "no": 77,
                "driver": "Valtteri Bottas",
                "car": "Alfa Romeo Ferrari",
                "laps": 58,
                "time": "+6.513s",
                "pts": 0
            },
            {
                "pos": '12',
                "no": 55,
                "driver": "Carlos Sainz",
                "car": "Ferrari",
                "laps": 58,
                "time": "+6.594s",
                "pts": 0
            },
            {
                "pos": '13',
                "no": 10,
                "driver": "Pierre Gasly",
                "car": "Alpine Renault",
                "laps": 56,
                "time": "DNF",
                "pts": 0
            },
            {
                "pos": '14',
                "no": 31,
                "driver": "Esteban Ocon",
                "car": "Alpine Renault",
                "laps": 56,
                "time": "DNF",
                "pts": 0
            },
            {
                "pos": '15',
                "no": 21,
                "driver": "Nyck De Vries",
                "car": "AlphaTauri Honda RBPT",
                "laps": 56,
                "time": "DNF",
                "pts": 0
            },
            {
                "pos": '16',
                "no": 2,
                "driver": "Logan Sargeant",
                "car": "Williams Mercedes",
                "laps": 56,
                "time": "DNF",
                "pts": 0
            },
            {
                "pos": '17',
                "no": 20,
                "driver": "Kevin Magnussen",
                "car": "Haas Ferrari",
                "laps": 52,
                "time": "DNF",
                "pts": 0
            },
            {
                "pos": "NC",
                "no": 63,
                "driver": "George Russell",
                "car": "Mercedes",
                "laps": 17,
                "time": "DNF",
                "pts": 0
            },
            {
                "pos": "NC",
                "no": 23,
                "driver": "Alexander Albon",
                "car": "Williams Mercedes",
                "laps": 6,
                "time": "DNF",
                "pts": 0
            },
            {
                "pos": "NC",
                "no": 16,
                "driver": "Charles Leclerc",
                "car": "Ferrari",
                "laps": 0,
                "time": "DNF",
                "pts": 0
            }
        ],
    }, {
        year: 2023,
        grandpix: 'Azerbaijan',
        results: [
            {
                "pos": '1',
                "no": 11,
                "driver": "Sergio Perez",
                "car": "Red Bull Racing Honda RBPT",
                "laps": 51,
                "time": "1:32:42.436",
                "pts": 25
            },
            {
                "pos": '2',
                "no": 1,
                "driver": "Max Verstappen",
                "car": "Red Bull Racing Honda RBPT",
                "laps": 51,
                "time": "+2.137s",
                "pts": 18
            },
            {
                "pos": '3',
                "no": 16,
                "driver": "Charles Leclerc",
                "car": "Ferrari",
                "laps": 51,
                "time": "+21.217s",
                "pts": 15
            },
            {
                "pos": '4',
                "no": 14,
                "driver": "Fernando Alonso",
                "car": "Aston Martin Aramco Mercedes",
                "laps": 51,
                "time": "+22.024s",
                "pts": 12
            },
            {
                "pos": '5',
                "no": 55,
                "driver": "Carlos Sainz",
                "car": "Ferrari",
                "laps": 51,
                "time": "+45.491s",
                "pts": 10
            },
            {
                "pos": '6',
                "no": 44,
                "driver": "Lewis Hamilton",
                "car": "Mercedes",
                "laps": 51,
                "time": "+46.145s",
                "pts": 8
            },
            {
                "pos": '7',
                "no": 18,
                "driver": "Lance Stroll",
                "car": "Aston Martin Aramco Mercedes",
                "laps": 51,
                "time": "+51.617s",
                "pts": 6
            },
            {
                "pos": '8',
                "no": 63,
                "driver": "George Russell",
                "car": "Mercedes",
                "laps": 51,
                "time": "+74.240s",
                "pts": 5
            },
            {
                "pos": '9',
                "no": 4,
                "driver": "Lando Norris",
                "car": "McLaren Mercedes",
                "laps": 51,
                "time": "+80.376s",
                "pts": 2
            },
            {
                "pos": '10',
                "no": 22,
                "driver": "Yuki Tsunoda",
                "car": "AlphaTauri Honda RBPT",
                "laps": 51,
                "time": "+83.862s",
                "pts": 1
            },
            {
                "pos": '11',
                "no": 81,
                "driver": "Oscar Piastri",
                "car": "McLaren Mercedes",
                "laps": 51,
                "time": "+86.501s",
                "pts": 0
            },
            {
                "pos": '12',
                "no": 23,
                "driver": "Alexander Albon",
                "car": "Williams Mercedes",
                "laps": 51,
                "time": "+88.623s",
                "pts": 0
            },
            {
                "pos": '13',
                "no": 20,
                "driver": "Kevin Magnussen",
                "car": "Haas Ferrari",
                "laps": 51,
                "time": "+89.729s",
                "pts": 0
            },
            {
                "pos": '14',
                "no": 10,
                "driver": "Pierre Gasly",
                "car": "Alpine Renault",
                "laps": 51,
                "time": "+91.332s",
                "pts": 0
            },
            {
                "pos": '15',
                "no": 31,
                "driver": "Esteban Ocon",
                "car": "Alpine Renault",
                "laps": 51,
                "time": "+97.794s",
                "pts": 0
            },
            {
                "pos": '16',
                "no": 2,
                "driver": "Logan Sargeant",
                "car": "Williams Mercedes",
                "laps": 51,
                "time": "+100.943s",
                "pts": 0
            },
            {
                "pos": '17',
                "no": 27,
                "driver": "Nico Hulkenberg",
                "car": "Haas Ferrari",
                "laps": 50,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '18',
                "no": 77,
                "driver": "Valtteri Bottas",
                "car": "Alfa Romeo Ferrari",
                "laps": 50,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": "NC",
                "no": 24,
                "driver": "Zhou Guanyu",
                "car": "Alfa Romeo Ferrari",
                "laps": 36,
                "time": "DNF",
                "pts": 0
            },
            {
                "pos": "NC",
                "no": 21,
                "driver": "Nyck De Vries",
                "car": "AlphaTauri Honda RBPT",
                "laps": 9,
                "time": "DNF",
                "pts": 0
            }
        ],
    }, {
        year: 2023,
        grandpix: 'Miami',
        results: [
            {
                "pos": '1',
                "no": 1,
                "driver": "Max Verstappen",
                "car": "Red Bull Racing Honda RBPT",
                "laps": 57,
                "time": "1:27:38.241",
                "pts": 26
            },
            {
                "pos": '2',
                "no": 11,
                "driver": "Sergio Perez",
                "car": "Red Bull Racing Honda RBPT",
                "laps": 57,
                "time": "+5.384s",
                "pts": 18
            },
            {
                "pos": '3',
                "no": 14,
                "driver": "Fernando Alonso",
                "car": "Aston Martin Aramco Mercedes",
                "laps": 57,
                "time": "+26.305s",
                "pts": 15
            },
            {
                "pos": '4',
                "no": 63,
                "driver": "George Russell",
                "car": "Mercedes",
                "laps": 57,
                "time": "+33.229s",
                "pts": 12
            },
            {
                "pos": '5',
                "no": 55,
                "driver": "Carlos Sainz",
                "car": "Ferrari",
                "laps": 57,
                "time": "+42.511s",
                "pts": 10
            },
            {
                "pos": '6',
                "no": 44,
                "driver": "Lewis Hamilton",
                "car": "Mercedes",
                "laps": 57,
                "time": "+51.249s",
                "pts": 8
            },
            {
                "pos": '7',
                "no": 16,
                "driver": "Charles Leclerc",
                "car": "Ferrari",
                "laps": 57,
                "time": "+52.988s",
                "pts": 6
            },
            {
                "pos": '8',
                "no": 10,
                "driver": "Pierre Gasly",
                "car": "Alpine Renault",
                "laps": 57,
                "time": "+55.670s",
                "pts": 4
            },
            {
                "pos": '9',
                "no": 31,
                "driver": "Esteban Ocon",
                "car": "Alpine Renault",
                "laps": 57,
                "time": "+58.123s",
                "pts": 2
            },
            {
                "pos": '10',
                "no": 20,
                "driver": "Kevin Magnussen",
                "car": "Haas Ferrari",
                "laps": 57,
                "time": "+62.945s",
                "pts": 1
            },
            {
                "pos": '11',
                "no": 22,
                "driver": "Yuki Tsunoda",
                "car": "AlphaTauri Honda RBPT",
                "laps": 57,
                "time": "+64.309s",
                "pts": 0
            },
            {
                "pos": '12',
                "no": 18,
                "driver": "Lance Stroll",
                "car": "Aston Martin Aramco Mercedes",
                "laps": 57,
                "time": "+64.754s",
                "pts": 0
            },
            {
                "pos": '13',
                "no": 77,
                "driver": "Valtteri Bottas",
                "car": "Alfa Romeo Ferrari",
                "laps": 57,
                "time": "+71.637s",
                "pts": 0
            },
            {
                "pos": '14',
                "no": 23,
                "driver": "Alexander Albon",
                "car": "Williams Mercedes",
                "laps": 57,
                "time": "+72.861s",
                "pts": 0
            },
            {
                "pos": '15',
                "no": 27,
                "driver": "Nico Hulkenberg",
                "car": "Haas Ferrari",
                "laps": 57,
                "time": "+74.950s",
                "pts": 0
            },
            {
                "pos": '16',
                "no": 24,
                "driver": "Zhou Guanyu",
                "car": "Alfa Romeo Ferrari",
                "laps": 57,
                "time": "+78.440s",
                "pts": 0
            },
            {
                "pos": '17',
                "no": 4,
                "driver": "Lando Norris",
                "car": "McLaren Mercedes",
                "laps": 57,
                "time": "+87.717s",
                "pts": 0
            },
            {
                "pos": '18',
                "no": 21,
                "driver": "Nyck De Vries",
                "car": "AlphaTauri Honda RBPT",
                "laps": 57,
                "time": "+88.949s",
                "pts": 0
            },
            {
                "pos": '19',
                "no": 81,
                "driver": "Oscar Piastri",
                "car": "McLaren Mercedes",
                "laps": 56,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '20',
                "no": 2,
                "driver": "Logan Sargeant",
                "car": "Williams Mercedes",
                "laps": 56,
                "time": "+1 lap",
                "pts": 0
            }
        ],
    }, {
        year: 2023,
        grandpix: 'Monaco',
        results: [
            {
                "pos": '1',
                "no": 1,
                "driver": "Max Verstappen",
                "car": "Red Bull Racing Honda RBPT",
                "laps": 78,
                "time": "1:48:51.980",
                "pts": 25
            },
            {
                "pos": '2',
                "no": 14,
                "driver": "Fernando Alonso",
                "car": "Aston Martin Aramco Mercedes",
                "laps": 78,
                "time": "+27.921s",
                "pts": 18
            },
            {
                "pos": '3',
                "no": 31,
                "driver": "Esteban Ocon",
                "car": "Alpine Renault",
                "laps": 78,
                "time": "+36.990s",
                "pts": 15
            },
            {
                "pos": '4',
                "no": 44,
                "driver": "Lewis Hamilton",
                "car": "Mercedes",
                "laps": 78,
                "time": "+39.062s",
                "pts": 13
            },
            {
                "pos": '5',
                "no": 63,
                "driver": "George Russell",
                "car": "Mercedes",
                "laps": 78,
                "time": "+56.284s",
                "pts": 10
            },
            {
                "pos": '6',
                "no": 16,
                "driver": "Charles Leclerc",
                "car": "Ferrari",
                "laps": 78,
                "time": "+61.890s",
                "pts": 8
            },
            {
                "pos": '7',
                "no": 10,
                "driver": "Pierre Gasly",
                "car": "Alpine Renault",
                "laps": 78,
                "time": "+62.362s",
                "pts": 6
            },
            {
                "pos": '8',
                "no": 55,
                "driver": "Carlos Sainz",
                "car": "Ferrari",
                "laps": 78,
                "time": "+63.391s",
                "pts": 4
            },
            {
                "pos": '9',
                "no": 4,
                "driver": "Lando Norris",
                "car": "McLaren Mercedes",
                "laps": 77,
                "time": "+1 lap",
                "pts": 2
            },
            {
                "pos": '10',
                "no": 81,
                "driver": "Oscar Piastri",
                "car": "McLaren Mercedes",
                "laps": 77,
                "time": "+1 lap",
                "pts": 1
            },
            {
                "pos": '11',
                "no": 77,
                "driver": "Valtteri Bottas",
                "car": "Alfa Romeo Ferrari",
                "laps": 77,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '12',
                "no": 21,
                "driver": "Nyck De Vries",
                "car": "AlphaTauri Honda RBPT",
                "laps": 77,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '13',
                "no": 24,
                "driver": "Zhou Guanyu",
                "car": "Alfa Romeo Ferrari",
                "laps": 77,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '14',
                "no": 23,
                "driver": "Alexander Albon",
                "car": "Williams Mercedes",
                "laps": 77,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '15',
                "no": 22,
                "driver": "Yuki Tsunoda",
                "car": "AlphaTauri Honda RBPT",
                "laps": 76,
                "time": "+2 laps",
                "pts": 0
            },
            {
                "pos": '16',
                "no": 11,
                "driver": "Sergio Perez",
                "car": "Red Bull Racing Honda RBPT",
                "laps": 76,
                "time": "+2 laps",
                "pts": 0
            },
            {
                "pos": '17',
                "no": 27,
                "driver": "Nico Hulkenberg",
                "car": "Haas Ferrari",
                "laps": 76,
                "time": "+2 laps",
                "pts": 0
            },
            {
                "pos": '18',
                "no": 2,
                "driver": "Logan Sargeant",
                "car": "Williams Mercedes",
                "laps": 76,
                "time": "+2 laps",
                "pts": 0
            },
            {
                "pos": '19',
                "no": 20,
                "driver": "Kevin Magnussen",
                "car": "Haas Ferrari",
                "laps": 70,
                "time": "DNF",
                "pts": 0
            },
            {
                "pos": "NC",
                "no": 18,
                "driver": "Lance Stroll",
                "car": "Aston Martin Aramco Mercedes",
                "laps": 53,
                "time": "DNF",
                "pts": 0
            }
        ],
    }, {
        year: 2023,
        grandpix: 'Spain',
        results: [
            {
                "pos": '1',
                "no": 1,
                "driver": "Max Verstappen",
                "car": "Red Bull Racing Honda RBPT",
                "laps": 66,
                "time": "1:27:57.940",
                "pts": 26
            },
            {
                "pos": '2',
                "no": 44,
                "driver": "Lewis Hamilton",
                "car": "Mercedes",
                "laps": 66,
                "time": "+24.090s",
                "pts": 18
            },
            {
                "pos": '3',
                "no": 63,
                "driver": "George Russell",
                "car": "Mercedes",
                "laps": 66,
                "time": "+32.389s",
                "pts": 15
            },
            {
                "pos": '4',
                "no": 11,
                "driver": "Sergio Perez",
                "car": "Red Bull Racing Honda RBPT",
                "laps": 66,
                "time": "+35.812s",
                "pts": 12
            },
            {
                "pos": '5',
                "no": 55,
                "driver": "Carlos Sainz",
                "car": "Ferrari",
                "laps": 66,
                "time": "+45.698s",
                "pts": 10
            },
            {
                "pos": '6',
                "no": 18,
                "driver": "Lance Stroll",
                "car": "Aston Martin Aramco Mercedes",
                "laps": 66,
                "time": "+63.320s",
                "pts": 8
            },
            {
                "pos": '7',
                "no": 14,
                "driver": "Fernando Alonso",
                "car": "Aston Martin Aramco Mercedes",
                "laps": 66,
                "time": "+64.127s",
                "pts": 6
            },
            {
                "pos": '8',
                "no": 31,
                "driver": "Esteban Ocon",
                "car": "Alpine Renault",
                "laps": 66,
                "time": "+69.242s",
                "pts": 4
            },
            {
                "pos": '9',
                "no": 24,
                "driver": "Zhou Guanyu",
                "car": "Alfa Romeo Ferrari",
                "laps": 66,
                "time": "+71.878s",
                "pts": 2
            },
            {
                "pos": '10',
                "no": 10,
                "driver": "Pierre Gasly",
                "car": "Alpine Renault",
                "laps": 66,
                "time": "+73.530s",
                "pts": 1
            },
            {
                "pos": '11',
                "no": 16,
                "driver": "Charles Leclerc",
                "car": "Ferrari",
                "laps": 66,
                "time": "+74.419s",
                "pts": 0
            },
            {
                "pos": '12',
                "no": 22,
                "driver": "Yuki Tsunoda",
                "car": "AlphaTauri Honda RBPT",
                "laps": 66,
                "time": "+75.416s",
                "pts": 0
            },
            {
                "pos": '13',
                "no": 81,
                "driver": "Oscar Piastri",
                "car": "McLaren Mercedes",
                "laps": 65,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '14',
                "no": 21,
                "driver": "Nyck De Vries",
                "car": "AlphaTauri Honda RBPT",
                "laps": 65,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '15',
                "no": 27,
                "driver": "Nico Hulkenberg",
                "car": "Haas Ferrari",
                "laps": 65,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '16',
                "no": 23,
                "driver": "Alexander Albon",
                "car": "Williams Mercedes",
                "laps": 65,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '17',
                "no": 4,
                "driver": "Lando Norris",
                "car": "McLaren Mercedes",
                "laps": 65,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '18',
                "no": 20,
                "driver": "Kevin Magnussen",
                "car": "Haas Ferrari",
                "laps": 65,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '19',
                "no": 77,
                "driver": "Valtteri Bottas",
                "car": "Alfa Romeo Ferrari",
                "laps": 65,
                "time": "+1 lap",
                "pts": 0
            },
            {
                "pos": '20',
                "no": 2,
                "driver": "Logan Sargeant",
                "car": "Williams Mercedes",
                "laps": 65,
                "time": "+1 lap",
                "pts": 0
            }
        ],
    }
]