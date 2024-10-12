import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const WeatherDetail = () => {

    const WeatherHours = [
        {
            "@attributes": {
                "Version": "2.0"
            },
            "Header": {
                "Title": "Weather3Hours",
                "Description": "Weather Observation for every 3 hour (1:00, 4:00, 7:00, 10:00, 13:00, 16:00, 19:00, 22:00) ",
                "Uri": "http://data.tmd.go.th/api/Weather3Hours/V2/index.php",
                "LastBuildDate": "2024-10-13 02:47:33",
                "CopyRight": "Thai Meteorological Department:2016",
                "Generator": "TMDData_API Services",
                "status": "200 OK"
            },
            "Stations": {
                "Station": [
                    {
                        "WmoStationNumber": "48300",
                        "StationNameThai": "แม่ฮ่องสอน",
                        "StationNameEnglish": "MAE HONG SON",
                        "Province": "แม่ฮ่องสอน",
                        "Latitude": "19.29897",
                        "Longitude": "97.97578",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "981.70",
                            "MeanSeaLevelPressure": "1011.99",
                            "AirTemperature": "25.2",
                            "DewPoint": "23.7",
                            "RelativeHumidity": "92",
                            "VaporPressure": "29.34",
                            "LandVisibility": "8.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48302",
                        "StationNameThai": "ดอยอ่างขาง",
                        "StationNameEnglish": "DOI ANG KANG",
                        "Province": "เชียงใหม่",
                        "Latitude": "19.93139",
                        "Longitude": "99.04833",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "850.35",
                            "MeanSeaLevelPressure": "1012.67",
                            "AirTemperature": "18.5",
                            "DewPoint": "18.2",
                            "RelativeHumidity": "98",
                            "VaporPressure": "20.85",
                            "LandVisibility": "7.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48303",
                        "StationNameThai": "เชียงราย",
                        "StationNameEnglish": "CHIANG RAI",
                        "Province": "เชียงราย",
                        "Latitude": "19.96139",
                        "Longitude": "99.88139",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "968.26",
                            "MeanSeaLevelPressure": "1012.31",
                            "AirTemperature": "24.2",
                            "DewPoint": "22.7",
                            "RelativeHumidity": "91",
                            "VaporPressure": "27.60",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48304",
                        "StationNameThai": "เชียงราย สกษ.",
                        "StationNameEnglish": "CHAING RAI AGROMET.",
                        "Province": "เชียงราย",
                        "Latitude": "19.87083",
                        "Longitude": "99.78278",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "965.91",
                            "MeanSeaLevelPressure": "1012.08",
                            "AirTemperature": "24.1",
                            "DewPoint": "22.8",
                            "RelativeHumidity": "92",
                            "VaporPressure": "27.68",
                            "LandVisibility": "7.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48307",
                        "StationNameThai": "ทุ่งช้าง",
                        "StationNameEnglish": "THUNG CHANG",
                        "Province": "น่าน",
                        "Latitude": "19.41194",
                        "Longitude": "100.88353",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "974.42",
                            "MeanSeaLevelPressure": "1012.53",
                            "AirTemperature": "23.5",
                            "DewPoint": "22.3",
                            "RelativeHumidity": "93",
                            "VaporPressure": "26.91",
                            "LandVisibility": "6.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48310",
                        "StationNameThai": "พะเยา",
                        "StationNameEnglish": "PHAYAO",
                        "Province": "พะเยา",
                        "Latitude": "19.13333",
                        "Longitude": "99.90000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "966.43",
                            "MeanSeaLevelPressure": "1012.05",
                            "AirTemperature": "23.5",
                            "DewPoint": "22.8",
                            "RelativeHumidity": "96",
                            "VaporPressure": "27.66",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48315",
                        "StationNameThai": "ท่าวังผา",
                        "StationNameEnglish": "THA WANGPHA",
                        "Province": "น่าน",
                        "Latitude": "19.11056",
                        "Longitude": "100.80250",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "985.31",
                            "MeanSeaLevelPressure": "1012.34",
                            "AirTemperature": "24.3",
                            "DewPoint": "23.1",
                            "RelativeHumidity": "93",
                            "VaporPressure": "28.28",
                            "LandVisibility": "7.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48324",
                        "StationNameThai": "เถิน",
                        "StationNameEnglish": "THOEN",
                        "Province": "ลำปาง",
                        "Latitude": "17.63661",
                        "Longitude": "99.24475",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "988.76",
                            "MeanSeaLevelPressure": "1010.72",
                            "AirTemperature": "24.6",
                            "DewPoint": "24.0",
                            "RelativeHumidity": "97",
                            "VaporPressure": "29.85",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.01"
                        }
                    },
                    {
                        "WmoStationNumber": "48325",
                        "StationNameThai": "แม่สะเรียง",
                        "StationNameEnglish": "MAE SARIANG",
                        "Province": "แม่ฮ่องสอน",
                        "Latitude": "18.16667",
                        "Longitude": "97.93333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "987.50",
                            "MeanSeaLevelPressure": "1011.86",
                            "AirTemperature": "24.5",
                            "DewPoint": "23.8",
                            "RelativeHumidity": "96",
                            "VaporPressure": "29.41",
                            "LandVisibility": "6.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "1.80"
                        }
                    },
                    {
                        "WmoStationNumber": "48327",
                        "StationNameThai": "เชียงใหม่",
                        "StationNameEnglish": "CHIANG MAI",
                        "Province": "เชียงใหม่",
                        "Latitude": "18.79000",
                        "Longitude": "98.97694",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "977.19",
                            "MeanSeaLevelPressure": "1011.89",
                            "AirTemperature": "25.8",
                            "DewPoint": "23.6",
                            "RelativeHumidity": "88",
                            "VaporPressure": "29.13",
                            "LandVisibility": "9.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48328",
                        "StationNameThai": "ลำปาง",
                        "StationNameEnglish": "LAMPANG",
                        "Province": "ลำปาง",
                        "Latitude": "18.28333",
                        "Longitude": "99.51667",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "984.27",
                            "MeanSeaLevelPressure": "1012.03",
                            "AirTemperature": "25.2",
                            "DewPoint": "24.2",
                            "RelativeHumidity": "94",
                            "VaporPressure": "30.15",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48329",
                        "StationNameThai": "ลำพูน",
                        "StationNameEnglish": "LAMPHUN",
                        "Province": "ลำพูน",
                        "Latitude": "18.56722",
                        "Longitude": "99.03389",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "977.81",
                            "MeanSeaLevelPressure": "1011.60",
                            "AirTemperature": "25.5",
                            "DewPoint": "23.7",
                            "RelativeHumidity": "90",
                            "VaporPressure": "29.38",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48330",
                        "StationNameThai": "แพร่",
                        "StationNameEnglish": "PHRAE",
                        "Province": "แพร่",
                        "Latitude": "18.16667",
                        "Longitude": "100.16667",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "992.63",
                            "MeanSeaLevelPressure": "1011.27",
                            "AirTemperature": "25.6",
                            "DewPoint": "24.7",
                            "RelativeHumidity": "95",
                            "VaporPressure": "31.17",
                            "LandVisibility": "4.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48331",
                        "StationNameThai": "น่าน",
                        "StationNameEnglish": "NAN",
                        "Province": "น่าน",
                        "Latitude": "18.77972",
                        "Longitude": "100.77778",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "988.81",
                            "MeanSeaLevelPressure": "1011.84",
                            "AirTemperature": "25.1",
                            "DewPoint": "23.5",
                            "RelativeHumidity": "91",
                            "VaporPressure": "28.92",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48333",
                        "StationNameThai": "น่าน สกษ.",
                        "StationNameEnglish": "NAN AGROMET.",
                        "Province": "น่าน",
                        "Latitude": "18.86667",
                        "Longitude": "100.75000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "981.68",
                            "MeanSeaLevelPressure": "1011.89",
                            "AirTemperature": "24.5",
                            "DewPoint": "23.8",
                            "RelativeHumidity": "96",
                            "VaporPressure": "29.41",
                            "LandVisibility": "8.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48334",
                        "StationNameThai": "ลำปาง สกษ.",
                        "StationNameEnglish": "LAMPANG AGROMET.",
                        "Province": "ลำปาง",
                        "Latitude": "18.31667",
                        "Longitude": "99.28333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "976.19",
                            "MeanSeaLevelPressure": "1012.07",
                            "AirTemperature": "24.5",
                            "DewPoint": "23.0",
                            "RelativeHumidity": "91",
                            "VaporPressure": "28.11",
                            "LandVisibility": "8.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48350",
                        "StationNameThai": "เลย สกษ.",
                        "StationNameEnglish": "LOEI AGROMET.",
                        "Province": "เลย",
                        "Latitude": "17.40000",
                        "Longitude": "101.73333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "981.29",
                            "MeanSeaLevelPressure": "1011.33",
                            "AirTemperature": "24.3",
                            "DewPoint": "23.6",
                            "RelativeHumidity": "96",
                            "VaporPressure": "29.05",
                            "LandVisibility": "6.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48351",
                        "StationNameThai": "อุตรดิตถ์",
                        "StationNameEnglish": "UTTARADIT",
                        "Province": "อุตรดิตถ์",
                        "Latitude": "17.61667",
                        "Longitude": "100.10000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1003.66",
                            "MeanSeaLevelPressure": "1010.99",
                            "AirTemperature": "27.0",
                            "DewPoint": "24.8",
                            "RelativeHumidity": "88",
                            "VaporPressure": "31.38",
                            "LandVisibility": "6.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48352",
                        "StationNameThai": "หนองคาย",
                        "StationNameEnglish": "NONG KHAI",
                        "Province": "หนองคาย",
                        "Latitude": "17.86717",
                        "Longitude": "102.73303",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "991.41",
                            "MeanSeaLevelPressure": "1011.31",
                            "AirTemperature": "28.0",
                            "DewPoint": "24.8",
                            "RelativeHumidity": "83",
                            "VaporPressure": "31.39",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48353",
                        "StationNameThai": "เลย",
                        "StationNameEnglish": "LOEI",
                        "Province": "เลย",
                        "Latitude": "17.45000",
                        "Longitude": "101.73333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "983.09",
                            "MeanSeaLevelPressure": "1012.04",
                            "AirTemperature": "25.0",
                            "DewPoint": "24.3",
                            "RelativeHumidity": "96",
                            "VaporPressure": "30.32",
                            "LandVisibility": "5.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48354",
                        "StationNameThai": "อุดรธานี",
                        "StationNameEnglish": "UDON THANI",
                        "Province": "อุดรธานี",
                        "Latitude": "17.38333",
                        "Longitude": "102.80000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "991.22",
                            "MeanSeaLevelPressure": "1011.54",
                            "AirTemperature": "26.0",
                            "DewPoint": "23.8",
                            "RelativeHumidity": "88",
                            "VaporPressure": "29.50",
                            "LandVisibility": "8.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48355",
                        "StationNameThai": "สกลนคร สกษ.",
                        "StationNameEnglish": "SAKON NAKHON AGROMET.",
                        "Province": "สกลนคร",
                        "Latitude": "17.12503",
                        "Longitude": "104.06100",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "989.94",
                            "MeanSeaLevelPressure": "1011.92",
                            "AirTemperature": "24.7",
                            "DewPoint": "22.3",
                            "RelativeHumidity": "87",
                            "VaporPressure": "26.93",
                            "LandVisibility": "7.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48356",
                        "StationNameThai": "สกลนคร",
                        "StationNameEnglish": "SAKON NAKHON",
                        "Province": "สกลนคร",
                        "Latitude": "17.15000",
                        "Longitude": "104.13333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "991.70",
                            "MeanSeaLevelPressure": "1011.36",
                            "AirTemperature": "25.5",
                            "DewPoint": "22.8",
                            "RelativeHumidity": "85",
                            "VaporPressure": "27.81",
                            "LandVisibility": "7.00",
                            "WindDirection": "190",
                            "WindSpeed": "3.7",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48357",
                        "StationNameThai": "นครพนม",
                        "StationNameEnglish": "NAKHON PHANOM",
                        "Province": "นครพนม",
                        "Latitude": "17.41083",
                        "Longitude": "104.78250",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "994.76",
                            "MeanSeaLevelPressure": "1011.62",
                            "AirTemperature": "26.1",
                            "DewPoint": "21.4",
                            "RelativeHumidity": "76",
                            "VaporPressure": "25.53",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48358",
                        "StationNameThai": "นครพนม สกษ.",
                        "StationNameEnglish": "NAKHON PHANOM AGROMET.",
                        "Province": "นครพนม",
                        "Latitude": "17.44306",
                        "Longitude": "104.77361",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "994.40",
                            "MeanSeaLevelPressure": "1012.06",
                            "AirTemperature": "24.0",
                            "DewPoint": "21.7",
                            "RelativeHumidity": "87",
                            "VaporPressure": "26.01",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48360",
                        "StationNameThai": "หนองบัวลำภู",
                        "StationNameEnglish": "NONG BUA LAM PHU",
                        "Province": "หนองบัวลำภู",
                        "Latitude": "17.23250",
                        "Longitude": "102.42944",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "984.87",
                            "MeanSeaLevelPressure": "1010.80",
                            "AirTemperature": "26.2",
                            "DewPoint": "23.3",
                            "RelativeHumidity": "84",
                            "VaporPressure": "28.54",
                            "LandVisibility": "9.00",
                            "WindDirection": "080",
                            "WindSpeed": "3.7",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48363",
                        "StationNameThai": "บึงกาฬ",
                        "StationNameEnglish": "Bueng Kan",
                        "Province": "บึงกาฬ",
                        "Latitude": "18.41361",
                        "Longitude": "103.51672",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "992.80",
                            "MeanSeaLevelPressure": "1011.65",
                            "AirTemperature": "25.6",
                            "DewPoint": "24.4",
                            "RelativeHumidity": "93",
                            "VaporPressure": "30.63",
                            "LandVisibility": "4.00",
                            "WindDirection": "150",
                            "WindSpeed": "3.7",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48372",
                        "StationNameThai": "สุโขทัย",
                        "StationNameEnglish": "SUKHOTHAI*",
                        "Province": "สุโขทัย",
                        "Latitude": "17.10611",
                        "Longitude": "99.80000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1004.02",
                            "MeanSeaLevelPressure": "1009.81",
                            "AirTemperature": "27.8",
                            "DewPoint": "25.2",
                            "RelativeHumidity": "86",
                            "VaporPressure": "32.12",
                            "LandVisibility": "8.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48373",
                        "StationNameThai": "ศรีสำโรง สกษ.",
                        "StationNameEnglish": "SI SAMRONG AGROMET.",
                        "Province": "สุโขทัย",
                        "Latitude": "17.16136",
                        "Longitude": "99.86167",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1004.69",
                            "MeanSeaLevelPressure": "1010.90",
                            "AirTemperature": "27.5",
                            "DewPoint": "26.1",
                            "RelativeHumidity": "92",
                            "VaporPressure": "33.78",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48374",
                        "StationNameThai": "หล่มสัก",
                        "StationNameEnglish": "LOM SAK",
                        "Province": "เพชรบูรณ์",
                        "Latitude": "16.77361",
                        "Longitude": "101.24944",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "995.07",
                            "MeanSeaLevelPressure": "1011.72",
                            "AirTemperature": "24.5",
                            "DewPoint": "22.3",
                            "RelativeHumidity": "87",
                            "VaporPressure": "26.84",
                            "LandVisibility": "8.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48375",
                        "StationNameThai": "แม่สอด",
                        "StationNameEnglish": "MAE SOT",
                        "Province": "ตาก",
                        "Latitude": "16.65917",
                        "Longitude": "98.55083",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "986.92",
                            "MeanSeaLevelPressure": "1009.39",
                            "AirTemperature": "25.5",
                            "DewPoint": "24.0",
                            "RelativeHumidity": "92",
                            "VaporPressure": "29.91",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48376",
                        "StationNameThai": "ตาก",
                        "StationNameEnglish": "TAK",
                        "Province": "ตาก",
                        "Latitude": "16.87833",
                        "Longitude": "99.14333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "997.28",
                            "MeanSeaLevelPressure": "1011.79",
                            "AirTemperature": "25.9",
                            "DewPoint": "24.9",
                            "RelativeHumidity": "94",
                            "VaporPressure": "31.46",
                            "LandVisibility": "8.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48377",
                        "StationNameThai": "เขื่อนภูมิพล",
                        "StationNameEnglish": "BHUMIBOL DAM",
                        "Province": "ตาก",
                        "Latitude": "17.24389",
                        "Longitude": "99.00250",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "994.82",
                            "MeanSeaLevelPressure": "1011.37",
                            "AirTemperature": "25.2",
                            "DewPoint": "23.4",
                            "RelativeHumidity": "90",
                            "VaporPressure": "28.83",
                            "LandVisibility": "7.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48378",
                        "StationNameThai": "พิษณุโลก",
                        "StationNameEnglish": "PHITSANULOK",
                        "Province": "พิษณุโลก",
                        "Latitude": "16.79481",
                        "Longitude": "100.27930",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1005.38",
                            "MeanSeaLevelPressure": "1010.63",
                            "AirTemperature": "27.0",
                            "DewPoint": "25.6",
                            "RelativeHumidity": "92",
                            "VaporPressure": "32.75",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48379",
                        "StationNameThai": "เพชรบูรณ์",
                        "StationNameEnglish": "PHETCHABUN",
                        "Province": "เพชรบูรณ์",
                        "Latitude": "16.43333",
                        "Longitude": "101.15000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "996.56",
                            "MeanSeaLevelPressure": "1009.85",
                            "AirTemperature": "25.7",
                            "DewPoint": "24.2",
                            "RelativeHumidity": "92",
                            "VaporPressure": "30.28",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48380",
                        "StationNameThai": "กำแพงเพชร",
                        "StationNameEnglish": "KAMPHAENG PHET",
                        "Province": "กำแพงเพชร",
                        "Latitude": "16.48681",
                        "Longitude": "99.52697",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1001.18",
                            "MeanSeaLevelPressure": "1010.54",
                            "AirTemperature": "26.7",
                            "DewPoint": "25.6",
                            "RelativeHumidity": "94",
                            "VaporPressure": "32.74",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "3.30"
                        }
                    },
                    {
                        "WmoStationNumber": "48381",
                        "StationNameThai": "ขอนแก่น",
                        "StationNameEnglish": "KHON KAEN",
                        "Province": "ขอนแก่น",
                        "Latitude": "16.46111",
                        "Longitude": "102.78972",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "986.58",
                            "MeanSeaLevelPressure": "1009.10",
                            "AirTemperature": "27.0",
                            "DewPoint": "23.3",
                            "RelativeHumidity": "80",
                            "VaporPressure": "28.67",
                            "LandVisibility": "10.00",
                            "WindDirection": "070",
                            "WindSpeed": "3.7",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48382",
                        "StationNameThai": "มหาสารคาม",
                        "StationNameEnglish": "MAHASARAKHAM",
                        "Province": "มหาสารคาม",
                        "Latitude": "16.24722",
                        "Longitude": "103.06805",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "993.98",
                            "MeanSeaLevelPressure": "1011.60",
                            "AirTemperature": "26.2",
                            "DewPoint": "23.7",
                            "RelativeHumidity": "86",
                            "VaporPressure": "29.33",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48383",
                        "StationNameThai": "มุกดาหาร",
                        "StationNameEnglish": "MUKDAHAN",
                        "Province": "มุกดาหาร",
                        "Latitude": "16.54139",
                        "Longitude": "104.72889",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "994.86",
                            "MeanSeaLevelPressure": "1010.82",
                            "AirTemperature": "25.8",
                            "DewPoint": "21.6",
                            "RelativeHumidity": "78",
                            "VaporPressure": "25.78",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48384",
                        "StationNameThai": "ท่าพระ สกษ.",
                        "StationNameEnglish": "THA PHRA AGROMET.",
                        "Province": "ขอนแก่น",
                        "Latitude": "16.33333",
                        "Longitude": "102.81667",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "993.53",
                            "MeanSeaLevelPressure": "1012.55",
                            "AirTemperature": "26.4",
                            "DewPoint": "25.8",
                            "RelativeHumidity": "97",
                            "VaporPressure": "33.27",
                            "LandVisibility": "7.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48385",
                        "StationNameThai": "อุ้มผาง",
                        "StationNameEnglish": "UMPHANG",
                        "Province": "ตาก",
                        "Latitude": "16.02472",
                        "Longitude": "98.86444",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "959.04",
                            "MeanSeaLevelPressure": "1010.80",
                            "AirTemperature": "23.6",
                            "DewPoint": "21.9",
                            "RelativeHumidity": "90",
                            "VaporPressure": "26.33",
                            "LandVisibility": "7.00",
                            "WindDirection": "030",
                            "WindSpeed": "1.9",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48386",
                        "StationNameThai": "พิจิตร สกษ.",
                        "StationNameEnglish": "PICHIT AGROMET.",
                        "Province": "พิจิตร",
                        "Latitude": "16.43806",
                        "Longitude": "100.29250",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1004.39",
                            "MeanSeaLevelPressure": "1008.72",
                            "AirTemperature": "28.1",
                            "DewPoint": "25.8",
                            "RelativeHumidity": "88",
                            "VaporPressure": "33.29",
                            "LandVisibility": "4.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48387",
                        "StationNameThai": "ดอยมูเซอร์ สกษ.",
                        "StationNameEnglish": "DOI MU SOE AGROMET.",
                        "Province": "ตาก",
                        "Latitude": "16.75000",
                        "Longitude": "98.93333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "916.59",
                            "MeanSeaLevelPressure": "1012.57",
                            "AirTemperature": "20.3",
                            "DewPoint": "19.5",
                            "RelativeHumidity": "95",
                            "VaporPressure": "22.66",
                            "LandVisibility": ".60",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.80"
                        }
                    },
                    {
                        "WmoStationNumber": "48390",
                        "StationNameThai": "กาฬสินธุ์",
                        "StationNameEnglish": "KALASIN",
                        "Province": "กาฬสินธุ์",
                        "Latitude": "16.33250",
                        "Longitude": "103.58833",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "995.16",
                            "MeanSeaLevelPressure": "1011.28",
                            "AirTemperature": "25.7",
                            "DewPoint": "24.4",
                            "RelativeHumidity": "93",
                            "VaporPressure": "30.54",
                            "LandVisibility": "9.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.01"
                        }
                    },
                    {
                        "WmoStationNumber": "48391",
                        "StationNameThai": "อำนาจเจริญ",
                        "StationNameEnglish": "Amnat Charoen",
                        "Province": "อำนาจเจริญ",
                        "Latitude": "15.90375",
                        "Longitude": "104.61805",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "990.47",
                            "MeanSeaLevelPressure": "1011.05",
                            "AirTemperature": "25.1",
                            "DewPoint": "21.2",
                            "RelativeHumidity": "79",
                            "VaporPressure": "25.10",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48400",
                        "StationNameThai": "นครสวรรค์ ",
                        "StationNameEnglish": "NAKHON SAWAN",
                        "Province": "นครสวรรค์",
                        "Latitude": "15.67183",
                        "Longitude": "100.13236",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1006.50",
                            "MeanSeaLevelPressure": "1010.61",
                            "AirTemperature": "28.0",
                            "DewPoint": "26.3",
                            "RelativeHumidity": "91",
                            "VaporPressure": "34.23",
                            "LandVisibility": "5.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48401",
                        "StationNameThai": "ตากฟ้า สกษ.",
                        "StationNameEnglish": "TAKFA AGROMET.",
                        "Province": "นครสวรรค์",
                        "Latitude": "15.34944",
                        "Longitude": "100.53028",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1000.51",
                            "MeanSeaLevelPressure": "1011.20",
                            "AirTemperature": "26.7",
                            "DewPoint": "24.4",
                            "RelativeHumidity": "87",
                            "VaporPressure": "30.53",
                            "LandVisibility": "6.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48402",
                        "StationNameThai": "ชัยนาท สกษ.",
                        "StationNameEnglish": "CHAINAT AGROMET.",
                        "Province": "ชัยนาท",
                        "Latitude": "15.15000",
                        "Longitude": "100.18333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1008.59",
                            "MeanSeaLevelPressure": "1010.52",
                            "AirTemperature": "27.4",
                            "DewPoint": "26.0",
                            "RelativeHumidity": "92",
                            "VaporPressure": "33.58",
                            "LandVisibility": "8.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48403",
                        "StationNameThai": "ชัยภูมิ",
                        "StationNameEnglish": "CHAIYAPHUM",
                        "Province": "ชัยภูมิ",
                        "Latitude": "15.80000",
                        "Longitude": "102.03333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "989.93",
                            "MeanSeaLevelPressure": "1010.85",
                            "AirTemperature": "27.2",
                            "DewPoint": "24.2",
                            "RelativeHumidity": "84",
                            "VaporPressure": "30.12",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48404",
                        "StationNameThai": "ร้อยเอ็ด สกษ.",
                        "StationNameEnglish": "ROI ET AGROMET.",
                        "Province": "ร้อยเอ็ด",
                        "Latitude": "16.07322",
                        "Longitude": "103.60844",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "993.02",
                            "MeanSeaLevelPressure": "1010.83",
                            "AirTemperature": "25.6",
                            "DewPoint": "24.0",
                            "RelativeHumidity": "91",
                            "VaporPressure": "29.82",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.30"
                        }
                    },
                    {
                        "WmoStationNumber": "48405",
                        "StationNameThai": "ร้อยเอ็ด",
                        "StationNameEnglish": "ROI ET",
                        "Province": "ร้อยเอ็ด",
                        "Latitude": "16.02000",
                        "Longitude": "103.74389",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "994.12",
                            "MeanSeaLevelPressure": "1010.80",
                            "AirTemperature": "26.6",
                            "DewPoint": "23.5",
                            "RelativeHumidity": "83",
                            "VaporPressure": "29.00",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48406",
                        "StationNameThai": "ยโสธร",
                        "StationNameEnglish": "Yasothon",
                        "Province": "ยโสธร",
                        "Latitude": "15.79494",
                        "Longitude": "104.21436",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "994.44",
                            "MeanSeaLevelPressure": "1011.30",
                            "AirTemperature": "25.2",
                            "DewPoint": "23.1",
                            "RelativeHumidity": "88",
                            "VaporPressure": "28.31",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48407",
                        "StationNameThai": "อุบลราชธานี (ศูนย์ฯ)",
                        "StationNameEnglish": "UBON RATCHATHANI",
                        "Province": "อุบลราชธานี",
                        "Latitude": "15.25000",
                        "Longitude": "104.86667",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "996.59",
                            "MeanSeaLevelPressure": "1010.72",
                            "AirTemperature": "26.0",
                            "DewPoint": "23.8",
                            "RelativeHumidity": "88",
                            "VaporPressure": "29.50",
                            "LandVisibility": "10.00",
                            "WindDirection": "010",
                            "WindSpeed": "1.9",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.40"
                        }
                    },
                    {
                        "WmoStationNumber": "48408",
                        "StationNameThai": "อุบลราชธานี สกษ.",
                        "StationNameEnglish": "UBON RATCHATHANI AGROMET.",
                        "Province": "อุบลราชธานี",
                        "Latitude": "15.23914",
                        "Longitude": "105.02350",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "996.02",
                            "MeanSeaLevelPressure": "1011.01",
                            "AirTemperature": "25.0",
                            "DewPoint": "24.1",
                            "RelativeHumidity": "95",
                            "VaporPressure": "30.05",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "13.70"
                        }
                    },
                    {
                        "WmoStationNumber": "48409",
                        "StationNameThai": "ศรีสะเกษ",
                        "StationNameEnglish": "SI SAKET AGROMET.",
                        "Province": "ศรีสะเกษ",
                        "Latitude": "15.00000",
                        "Longitude": "104.05000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "995.90",
                            "MeanSeaLevelPressure": "1010.66",
                            "AirTemperature": "26.1",
                            "DewPoint": "25.2",
                            "RelativeHumidity": "95",
                            "VaporPressure": "32.12",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "36.50"
                        }
                    },
                    {
                        "WmoStationNumber": "48410",
                        "StationNameThai": "อุทัยธานี",
                        "StationNameEnglish": "UTHAITHANI",
                        "Province": "อุทัยธานี",
                        "Latitude": "15.37417",
                        "Longitude": "100.03889",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1007.10",
                            "MeanSeaLevelPressure": "1010.12",
                            "AirTemperature": "27.7",
                            "DewPoint": "26.0",
                            "RelativeHumidity": "91",
                            "VaporPressure": "33.62",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "6.40",
                            "Rainfall24Hr": "8.70"
                        }
                    },
                    {
                        "WmoStationNumber": "48413",
                        "StationNameThai": "วิเชียรบุรี",
                        "StationNameEnglish": "WICHIAN BURI",
                        "Province": "เพชรบูรณ์",
                        "Latitude": "15.65700",
                        "Longitude": "101.10800",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1002.31",
                            "MeanSeaLevelPressure": "1010.28",
                            "AirTemperature": "27.3",
                            "DewPoint": "25.4",
                            "RelativeHumidity": "90",
                            "VaporPressure": "32.53",
                            "LandVisibility": "7.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48415",
                        "StationNameThai": "พระนครศรีอยุธยา",
                        "StationNameEnglish": "AYUTTHAYA",
                        "Province": "พระนครศรีอยุธยา",
                        "Latitude": "14.53472",
                        "Longitude": "100.72500",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.40",
                            "MeanSeaLevelPressure": "1010.54",
                            "AirTemperature": "27.0",
                            "DewPoint": "24.1",
                            "RelativeHumidity": "84",
                            "VaporPressure": "30.02",
                            "LandVisibility": "9.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48416",
                        "StationNameThai": "ท่าตูม",
                        "StationNameEnglish": "THA TUM",
                        "Province": "สุรินทร์",
                        "Latitude": "15.31667",
                        "Longitude": "103.68333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "995.70",
                            "MeanSeaLevelPressure": "1010.52",
                            "AirTemperature": "25.3",
                            "DewPoint": "23.4",
                            "RelativeHumidity": "89",
                            "VaporPressure": "28.75",
                            "LandVisibility": "7.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "3.70"
                        }
                    },
                    {
                        "WmoStationNumber": "48417",
                        "StationNameThai": "นครนายก",
                        "StationNameEnglish": "NAKORNNAYOK",
                        "Province": "นครนายก",
                        "Latitude": "14.36222",
                        "Longitude": "101.39278",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "876.40",
                            "MeanSeaLevelPressure": "1011.48",
                            "AirTemperature": "20.7",
                            "DewPoint": "20.2",
                            "RelativeHumidity": "97",
                            "VaporPressure": "23.70",
                            "LandVisibility": "8.00",
                            "WindDirection": "120",
                            "WindSpeed": "13.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "7.40"
                        }
                    },
                    {
                        "WmoStationNumber": "48418",
                        "StationNameThai": "บัวชุม  ",
                        "StationNameEnglish": "BUA CHUM",
                        "Province": "ลพบุรี",
                        "Latitude": "15.26667",
                        "Longitude": "101.18736",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1004.68",
                            "MeanSeaLevelPressure": "1010.87",
                            "AirTemperature": "25.9",
                            "DewPoint": "23.9",
                            "RelativeHumidity": "89",
                            "VaporPressure": "29.58",
                            "LandVisibility": "5.00",
                            "WindDirection": "050",
                            "WindSpeed": "3.7",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48419",
                        "StationNameThai": "ปทุมธานี สกษ.",
                        "StationNameEnglish": "PATHUMTHANI",
                        "Province": "ปทุมธานี",
                        "Latitude": "14.10000",
                        "Longitude": "100.61667",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.65",
                            "MeanSeaLevelPressure": "1010.45",
                            "AirTemperature": "28.2",
                            "DewPoint": "25.1",
                            "RelativeHumidity": "83",
                            "VaporPressure": "31.79",
                            "LandVisibility": "8.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48420",
                        "StationNameThai": "สมุทรปราการ สกษ.",
                        "StationNameEnglish": "Samut Prakarn",
                        "Province": "สมุทรปราการ",
                        "Latitude": "13.51667",
                        "Longitude": "100.76167",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1010.15",
                            "MeanSeaLevelPressure": "1010.60",
                            "AirTemperature": "27.2",
                            "DewPoint": "24.0",
                            "RelativeHumidity": "83",
                            "VaporPressure": "29.85",
                            "LandVisibility": "6.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.01"
                        }
                    },
                    {
                        "WmoStationNumber": "48421",
                        "StationNameThai": "ทองผาภูมิ",
                        "StationNameEnglish": "THONG PHAPHUM",
                        "Province": "กาญจนบุรี",
                        "Latitude": "14.74222",
                        "Longitude": "98.63639",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1000.96",
                            "MeanSeaLevelPressure": "1012.41",
                            "AirTemperature": "24.6",
                            "DewPoint": "23.6",
                            "RelativeHumidity": "94",
                            "VaporPressure": "29.07",
                            "LandVisibility": "5.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "4.20",
                            "Rainfall24Hr": "4.20"
                        }
                    },
                    {
                        "WmoStationNumber": "48425",
                        "StationNameThai": "สุพรรณบุรี",
                        "StationNameEnglish": "SUPHAN BURI",
                        "Province": "สุพรรณบุรี",
                        "Latitude": "14.47444",
                        "Longitude": "100.13889",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.64",
                            "MeanSeaLevelPressure": "1010.75",
                            "AirTemperature": "27.2",
                            "DewPoint": "26.1",
                            "RelativeHumidity": "94",
                            "VaporPressure": "33.74",
                            "LandVisibility": "10.00",
                            "WindDirection": "300",
                            "WindSpeed": "9.3",
                            "Rainfall": "3.50",
                            "Rainfall24Hr": "3.80"
                        }
                    },
                    {
                        "WmoStationNumber": "48426",
                        "StationNameThai": "ลพบุรี",
                        "StationNameEnglish": "LOP BURI",
                        "Province": "ลพบุรี",
                        "Latitude": "14.79972",
                        "Longitude": "100.64500",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1008.65",
                            "MeanSeaLevelPressure": "1010.48",
                            "AirTemperature": "27.9",
                            "DewPoint": "25.2",
                            "RelativeHumidity": "85",
                            "VaporPressure": "32.03",
                            "LandVisibility": "7.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48427",
                        "StationNameThai": "อู่ทอง สกษ.",
                        "StationNameEnglish": "U THONG AGROMET.",
                        "Province": "สุพรรณบุรี",
                        "Latitude": "14.30361",
                        "Longitude": "99.86472",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1010.35",
                            "MeanSeaLevelPressure": "1011.27",
                            "AirTemperature": "25.5",
                            "DewPoint": "24.8",
                            "RelativeHumidity": "96",
                            "VaporPressure": "31.25",
                            "LandVisibility": "6.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "8.60",
                            "Rainfall24Hr": "18.40"
                        }
                    },
                    {
                        "WmoStationNumber": "48429",
                        "StationNameThai": "สนามบินสุวรรณภูมิ",
                        "StationNameEnglish": "SUVARNABHUMI AIRPORT",
                        "Province": "สมุทรปราการ",
                        "Latitude": "13.68639",
                        "Longitude": "100.76750",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.39",
                            "MeanSeaLevelPressure": "1010.52",
                            "AirTemperature": "26.4",
                            "DewPoint": "25.8",
                            "RelativeHumidity": "97",
                            "VaporPressure": "33.27",
                            "LandVisibility": "10.00",
                            "WindDirection": "340",
                            "WindSpeed": "3.7",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "1.60"
                        }
                    },
                    {
                        "WmoStationNumber": "48430",
                        "StationNameThai": "ปราจีนบุรี",
                        "StationNameEnglish": "PRACHIN BURI",
                        "Province": "ปราจีนบุรี",
                        "Latitude": "14.05842",
                        "Longitude": "101.36930",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1008.71",
                            "MeanSeaLevelPressure": "1009.42",
                            "AirTemperature": "27.4",
                            "DewPoint": "25.7",
                            "RelativeHumidity": "90",
                            "VaporPressure": "33.01",
                            "LandVisibility": "6.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "6.20"
                        }
                    },
                    {
                        "WmoStationNumber": "48431",
                        "StationNameThai": "นครราชสีมา",
                        "StationNameEnglish": "NAKHON RATCHASIMA",
                        "Province": "นครราชสีมา",
                        "Latitude": "14.96830",
                        "Longitude": "102.08603",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "989.80",
                            "MeanSeaLevelPressure": "1011.11",
                            "AirTemperature": "26.0",
                            "DewPoint": "24.0",
                            "RelativeHumidity": "89",
                            "VaporPressure": "29.76",
                            "LandVisibility": "10.00",
                            "WindDirection": "310",
                            "WindSpeed": "1.9",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48432",
                        "StationNameThai": "สุรินทร์",
                        "StationNameEnglish": "SURIN",
                        "Province": "สุรินทร์",
                        "Latitude": "14.88333",
                        "Longitude": "103.50000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "993.36",
                            "MeanSeaLevelPressure": "1010.20",
                            "AirTemperature": "25.7",
                            "DewPoint": "24.7",
                            "RelativeHumidity": "94",
                            "VaporPressure": "31.08",
                            "LandVisibility": "7.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48433",
                        "StationNameThai": "สุรินทร์ สกษ.",
                        "StationNameEnglish": "SURIN AGROMET.",
                        "Province": "สุรินทร์",
                        "Latitude": "14.88333",
                        "Longitude": "103.45000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "995.09",
                            "MeanSeaLevelPressure": "1011.70",
                            "AirTemperature": "25.1",
                            "DewPoint": "24.5",
                            "RelativeHumidity": "97",
                            "VaporPressure": "30.77",
                            "LandVisibility": "7.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "3.40"
                        }
                    },
                    {
                        "WmoStationNumber": "48434",
                        "StationNameThai": "โชคชัย",
                        "StationNameEnglish": "CHOK CHAI",
                        "Province": "นครราชสีมา",
                        "Latitude": "14.71889",
                        "Longitude": "102.16861",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "989.06",
                            "MeanSeaLevelPressure": "1011.16",
                            "AirTemperature": "24.8",
                            "DewPoint": "24.4",
                            "RelativeHumidity": "97",
                            "VaporPressure": "30.48",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "51.60"
                        }
                    },
                    {
                        "WmoStationNumber": "48435",
                        "StationNameThai": "ปากช่อง สกษ.",
                        "StationNameEnglish": "PAKCHONG AGROMET.",
                        "Province": "นครราชสีมา",
                        "Latitude": "14.64389",
                        "Longitude": "101.33194",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "967.17",
                            "MeanSeaLevelPressure": "1011.03",
                            "AirTemperature": "23.8",
                            "DewPoint": "22.5",
                            "RelativeHumidity": "92",
                            "VaporPressure": "27.17",
                            "LandVisibility": "8.00",
                            "WindDirection": "100",
                            "WindSpeed": "5.6",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48436",
                        "StationNameThai": "นางรอง",
                        "StationNameEnglish": "NANG RONG",
                        "Province": "บุรีรัมย์",
                        "Latitude": "14.58333",
                        "Longitude": "102.80000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "990.48",
                            "MeanSeaLevelPressure": "1011.29",
                            "AirTemperature": "24.6",
                            "DewPoint": "23.7",
                            "RelativeHumidity": "95",
                            "VaporPressure": "29.33",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48437",
                        "StationNameThai": "บุรีรัมย์",
                        "StationNameEnglish": "BURIRUM",
                        "Province": "บุรีรัมย์",
                        "Latitude": "15.22575",
                        "Longitude": "103.24808",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "990.74",
                            "MeanSeaLevelPressure": "1011.87",
                            "AirTemperature": "24.0",
                            "DewPoint": "23.7",
                            "RelativeHumidity": "98",
                            "VaporPressure": "29.30",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "5.80"
                        }
                    },
                    {
                        "WmoStationNumber": "48438",
                        "StationNameThai": "สมุทรสงคราม",
                        "StationNameEnglish": "SAMUTSONGKRAM",
                        "Province": "สมุทรสงคราม",
                        "Latitude": "13.40778",
                        "Longitude": "100.03222",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.99",
                            "MeanSeaLevelPressure": "1010.43",
                            "AirTemperature": "25.0",
                            "DewPoint": "24.0",
                            "RelativeHumidity": "94",
                            "VaporPressure": "29.79",
                            "LandVisibility": "10.00",
                            "WindDirection": "350",
                            "WindSpeed": "5.6",
                            "Rainfall": "2.20",
                            "Rainfall24Hr": "15.60"
                        }
                    },
                    {
                        "WmoStationNumber": "48439",
                        "StationNameThai": "กบินทร์บุรี",
                        "StationNameEnglish": "KABIN BURI",
                        "Province": "ปราจีนบุรี",
                        "Latitude": "13.98333",
                        "Longitude": "101.70722",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1008.55",
                            "MeanSeaLevelPressure": "1009.98",
                            "AirTemperature": "25.9",
                            "DewPoint": "25.2",
                            "RelativeHumidity": "96",
                            "VaporPressure": "32.01",
                            "LandVisibility": "6.00",
                            "WindDirection": {
                                "0": "   ",
                                "@attributes": {
                                    "Unit": "degree"
                                }
                            },
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "1.10"
                        }
                    },
                    {
                        "WmoStationNumber": "48440",
                        "StationNameThai": "สระแก้ว",
                        "StationNameEnglish": "SA KAEW",
                        "Province": "สระแก้ว",
                        "Latitude": "13.78889",
                        "Longitude": "102.03472",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1005.06",
                            "MeanSeaLevelPressure": "1010.03",
                            "AirTemperature": "25.8",
                            "DewPoint": "24.6",
                            "RelativeHumidity": "93",
                            "VaporPressure": "31.00",
                            "LandVisibility": "7.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48450",
                        "StationNameThai": "กาญจนบุรี",
                        "StationNameEnglish": "KANCHANA BURI",
                        "Province": "กาญจนบุรี",
                        "Latitude": "14.02250",
                        "Longitude": "99.53583",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1007.82",
                            "MeanSeaLevelPressure": "1011.14",
                            "AirTemperature": "25.2",
                            "DewPoint": "23.0",
                            "RelativeHumidity": "88",
                            "VaporPressure": "28.06",
                            "LandVisibility": "8.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "1.20"
                        }
                    },
                    {
                        "WmoStationNumber": "48451",
                        "StationNameThai": "นครปฐม",
                        "StationNameEnglish": "NAKHONPATHOM",
                        "Province": "นครปฐม",
                        "Latitude": "14.01167",
                        "Longitude": "99.97000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.58",
                            "MeanSeaLevelPressure": "1010.74",
                            "AirTemperature": "25.4",
                            "DewPoint": "24.2",
                            "RelativeHumidity": "93",
                            "VaporPressure": "30.25",
                            "LandVisibility": "8.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.01",
                            "Rainfall24Hr": "3.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48453",
                        "StationNameThai": "กรุงเทพฯ บางนา สกษ.",
                        "StationNameEnglish": "BANG NA AGROMET.",
                        "Province": "กรุงเทพมหานคร",
                        "Latitude": "13.66639",
                        "Longitude": "100.60611",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.91",
                            "MeanSeaLevelPressure": "1010.21",
                            "AirTemperature": "27.4",
                            "DewPoint": "25.4",
                            "RelativeHumidity": "89",
                            "VaporPressure": "32.45",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "1.30"
                        }
                    },
                    {
                        "WmoStationNumber": "48455",
                        "StationNameThai": "กรุงเทพมหานคร",
                        "StationNameEnglish": "BANGKOK METROPOLIS",
                        "Province": "กรุงเทพมหานคร",
                        "Latitude": "13.72639",
                        "Longitude": "100.56000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.29",
                            "MeanSeaLevelPressure": "1009.78",
                            "AirTemperature": "28.4",
                            "DewPoint": "25.0",
                            "RelativeHumidity": "82",
                            "VaporPressure": "31.62",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48456",
                        "StationNameThai": "สนามบินดอนเมือง",
                        "StationNameEnglish": "DON MUANG AIRPORT",
                        "Province": "กรุงเทพมหานคร",
                        "Latitude": "13.91917",
                        "Longitude": "100.60500",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1008.99",
                            "MeanSeaLevelPressure": "1010.40",
                            "AirTemperature": "27.9",
                            "DewPoint": "24.3",
                            "RelativeHumidity": "81",
                            "VaporPressure": "30.37",
                            "LandVisibility": "10.00",
                            "WindDirection": "230",
                            "WindSpeed": "1.9",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.01"
                        }
                    },
                    {
                        "WmoStationNumber": "48458",
                        "StationNameThai": "ฉะเชิงเทรา",
                        "StationNameEnglish": "CHACHOENGSAO",
                        "Province": "ฉะเชิงเทรา",
                        "Latitude": "13.51556",
                        "Longitude": "101.45833",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1003.84",
                            "MeanSeaLevelPressure": "1011.93",
                            "AirTemperature": "25.2",
                            "DewPoint": "24.6",
                            "RelativeHumidity": "97",
                            "VaporPressure": "30.96",
                            "LandVisibility": "6.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "8.40"
                        }
                    },
                    {
                        "WmoStationNumber": "48459",
                        "StationNameThai": "ชลบุรี",
                        "StationNameEnglish": "CHON BURI",
                        "Province": "ชลบุรี",
                        "Latitude": "13.36667",
                        "Longitude": "100.98333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.39",
                            "MeanSeaLevelPressure": "1009.67",
                            "AirTemperature": "27.1",
                            "DewPoint": "26.4",
                            "RelativeHumidity": "96",
                            "VaporPressure": "34.40",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "9.80"
                        }
                    },
                    {
                        "WmoStationNumber": "48460",
                        "StationNameThai": "เกาะสีชัง",
                        "StationNameEnglish": "KO SICHANG",
                        "Province": "ชลบุรี",
                        "Latitude": "13.16167",
                        "Longitude": "100.80194",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1007.65",
                            "MeanSeaLevelPressure": "1010.79",
                            "AirTemperature": "28.0",
                            "DewPoint": "26.6",
                            "RelativeHumidity": "92",
                            "VaporPressure": "34.81",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "4.50"
                        }
                    },
                    {
                        "WmoStationNumber": "48461",
                        "StationNameThai": "พัทยา",
                        "StationNameEnglish": "PHATTHAYA",
                        "Province": "ชลบุรี",
                        "Latitude": "12.92000",
                        "Longitude": "100.86944",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1002.96",
                            "MeanSeaLevelPressure": "1009.96",
                            "AirTemperature": "25.7",
                            "DewPoint": "24.7",
                            "RelativeHumidity": "94",
                            "VaporPressure": "31.08",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "3.60"
                        }
                    },
                    {
                        "WmoStationNumber": "48462",
                        "StationNameThai": "อรัญประเทศ",
                        "StationNameEnglish": "ARANYA PRATHET",
                        "Province": "สระแก้ว",
                        "Latitude": "13.70000",
                        "Longitude": "102.58333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1005.09",
                            "MeanSeaLevelPressure": "1010.72",
                            "AirTemperature": "26.3",
                            "DewPoint": "24.4",
                            "RelativeHumidity": "89",
                            "VaporPressure": "30.59",
                            "LandVisibility": "7.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "2.40"
                        }
                    },
                    {
                        "WmoStationNumber": "48464",
                        "StationNameThai": "ราชบุรี",
                        "StationNameEnglish": "RATCHA BURI",
                        "Province": "ราชบุรี",
                        "Latitude": "13.48931",
                        "Longitude": "99.79239",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1010.26",
                            "MeanSeaLevelPressure": "1011.54",
                            "AirTemperature": "24.9",
                            "DewPoint": "24.0",
                            "RelativeHumidity": "95",
                            "VaporPressure": "29.87",
                            "LandVisibility": "9.00",
                            "WindDirection": "320",
                            "WindSpeed": "7.4",
                            "Rainfall": "1.70",
                            "Rainfall24Hr": "22.90"
                        }
                    },
                    {
                        "WmoStationNumber": "48465",
                        "StationNameThai": "เพชรบุรี",
                        "StationNameEnglish": "PHETCHA BURI",
                        "Province": "เพชรบุรี",
                        "Latitude": "12.99944",
                        "Longitude": "100.06056",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.61",
                            "MeanSeaLevelPressure": "1010.06",
                            "AirTemperature": "25.5",
                            "DewPoint": "24.5",
                            "RelativeHumidity": "94",
                            "VaporPressure": "30.71",
                            "LandVisibility": "11.00",
                            "WindDirection": {
                                "0": "   ",
                                "@attributes": {
                                    "Unit": "degree"
                                }
                            },
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "3.70"
                        }
                    },
                    {
                        "WmoStationNumber": "48474",
                        "StationNameThai": "หนองพลับ สกษ.",
                        "StationNameEnglish": "NONG PHLUB AGROMET.",
                        "Province": "ประจวบคีรีขันธ์",
                        "Latitude": "12.58333",
                        "Longitude": "99.73333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "998.23",
                            "MeanSeaLevelPressure": "1010.61",
                            "AirTemperature": "25.0",
                            "DewPoint": "24.3",
                            "RelativeHumidity": "96",
                            "VaporPressure": "30.30",
                            "LandVisibility": "6.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.40"
                        }
                    },
                    {
                        "WmoStationNumber": "48475",
                        "StationNameThai": "หัวหิน",
                        "StationNameEnglish": "HUA HIN",
                        "Province": "ประจวบคีรีขันธ์",
                        "Latitude": "12.58611",
                        "Longitude": "99.96250",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.12",
                            "MeanSeaLevelPressure": "1009.83",
                            "AirTemperature": "26.0",
                            "DewPoint": "23.3",
                            "RelativeHumidity": "85",
                            "VaporPressure": "28.68",
                            "LandVisibility": "8.00",
                            "WindDirection": "300",
                            "WindSpeed": "7.4",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.01"
                        }
                    },
                    {
                        "WmoStationNumber": "48477",
                        "StationNameThai": "สัตหีบ",
                        "StationNameEnglish": "SATTAHIP",
                        "Province": "ชลบุรี",
                        "Latitude": "12.68333",
                        "Longitude": "100.98333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1006.37",
                            "MeanSeaLevelPressure": "1008.81",
                            "AirTemperature": "27.0",
                            "DewPoint": "25.7",
                            "RelativeHumidity": "93",
                            "VaporPressure": "33.06",
                            "LandVisibility": "6.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.10"
                        }
                    },
                    {
                        "WmoStationNumber": "48478",
                        "StationNameThai": "ระยอง",
                        "StationNameEnglish": "RAYONG",
                        "Province": "ระยอง",
                        "Latitude": "12.63222",
                        "Longitude": "101.34361",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1008.98",
                            "MeanSeaLevelPressure": "1009.55",
                            "AirTemperature": "26.5",
                            "DewPoint": "25.1",
                            "RelativeHumidity": "92",
                            "VaporPressure": "31.79",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.20"
                        }
                    },
                    {
                        "WmoStationNumber": "48479",
                        "StationNameThai": "ห้วยโป่ง สกษ.",
                        "StationNameEnglish": "HUAI PONG AGROMET.",
                        "Province": "ระยอง",
                        "Latitude": "12.73500",
                        "Longitude": "101.13500",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1004.71",
                            "MeanSeaLevelPressure": "1009.90",
                            "AirTemperature": "26.0",
                            "DewPoint": "24.7",
                            "RelativeHumidity": "93",
                            "VaporPressure": "31.11",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48480",
                        "StationNameThai": "จันทบุรี",
                        "StationNameEnglish": "CHANTHA BURI",
                        "Province": "จันทบุรี",
                        "Latitude": "12.61667",
                        "Longitude": "102.11333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.35",
                            "MeanSeaLevelPressure": "1009.76",
                            "AirTemperature": "27.0",
                            "DewPoint": "25.6",
                            "RelativeHumidity": "92",
                            "VaporPressure": "32.77",
                            "LandVisibility": "8.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.50"
                        }
                    },
                    {
                        "WmoStationNumber": "48481",
                        "StationNameThai": "พลิ้ว สกษ.",
                        "StationNameEnglish": "PHLIU  AGROMET.",
                        "Province": "จันทบุรี",
                        "Latitude": "12.50861",
                        "Longitude": "102.17305",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1006.77",
                            "MeanSeaLevelPressure": "1009.55",
                            "AirTemperature": "26.5",
                            "DewPoint": "25.2",
                            "RelativeHumidity": "93",
                            "VaporPressure": "32.07",
                            "LandVisibility": "8.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "0.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48500",
                        "StationNameThai": "ประจวบคีรีขันธ์",
                        "StationNameEnglish": "PRACHUAP KHIRIKHAN",
                        "Province": "ประจวบคีรีขันธ์",
                        "Latitude": "11.83333",
                        "Longitude": "99.83333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1008.91",
                            "MeanSeaLevelPressure": "1009.70",
                            "AirTemperature": "27.5",
                            "DewPoint": "25.8",
                            "RelativeHumidity": "90",
                            "VaporPressure": "33.21",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "26.30"
                        }
                    },
                    {
                        "WmoStationNumber": "48501",
                        "StationNameThai": "ตราด",
                        "StationNameEnglish": "TRAD",
                        "Province": "ตราด",
                        "Latitude": "11.76667",
                        "Longitude": "102.88333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.23",
                            "MeanSeaLevelPressure": "1009.54",
                            "AirTemperature": "25.1",
                            "DewPoint": "24.5",
                            "RelativeHumidity": "97",
                            "VaporPressure": "30.77",
                            "LandVisibility": "7.00",
                            "WindDirection": "090",
                            "WindSpeed": "5.6",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "5.30"
                        }
                    },
                    {
                        "WmoStationNumber": "48517",
                        "StationNameThai": "ชุมพร",
                        "StationNameEnglish": "CHUMPHON",
                        "Province": "ชุมพร",
                        "Latitude": "10.49875",
                        "Longitude": "99.18847",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.28",
                            "MeanSeaLevelPressure": "1009.97",
                            "AirTemperature": "25.2",
                            "DewPoint": "24.6",
                            "RelativeHumidity": "97",
                            "VaporPressure": "30.96",
                            "LandVisibility": "7.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.40",
                            "Rainfall24Hr": "50.70"
                        }
                    },
                    {
                        "WmoStationNumber": "48520",
                        "StationNameThai": "สวี สกษ.",
                        "StationNameEnglish": "SAWI AGROMET.",
                        "Province": "ชุมพร",
                        "Latitude": "10.33333",
                        "Longitude": "99.10000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1008.35",
                            "MeanSeaLevelPressure": "1009.90",
                            "AirTemperature": "25.0",
                            "DewPoint": "24.4",
                            "RelativeHumidity": "97",
                            "VaporPressure": "30.58",
                            "LandVisibility": "7.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "1.40",
                            "Rainfall24Hr": "26.80"
                        }
                    },
                    {
                        "WmoStationNumber": "48532",
                        "StationNameThai": "ระนอง",
                        "StationNameEnglish": "RANONG",
                        "Province": "ระนอง",
                        "Latitude": "9.98333",
                        "Longitude": "98.61667",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.06",
                            "MeanSeaLevelPressure": "1010.01",
                            "AirTemperature": "25.4",
                            "DewPoint": "24.4",
                            "RelativeHumidity": "94",
                            "VaporPressure": "30.52",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.40",
                            "Rainfall24Hr": "2.40"
                        }
                    },
                    {
                        "WmoStationNumber": "48550",
                        "StationNameThai": "เกาะสมุย",
                        "StationNameEnglish": "KO SAMUI",
                        "Province": "สุราษฎร์ธานี",
                        "Latitude": "9.46667",
                        "Longitude": "100.05000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.43",
                            "MeanSeaLevelPressure": "1010.12",
                            "AirTemperature": "26.2",
                            "DewPoint": "25.9",
                            "RelativeHumidity": "98",
                            "VaporPressure": "33.43",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "13.60"
                        }
                    },
                    {
                        "WmoStationNumber": "48551",
                        "StationNameThai": "สุราษฎร์ธานี",
                        "StationNameEnglish": "SURAT THANI",
                        "Province": "สุราษฎร์ธานี",
                        "Latitude": "9.13556",
                        "Longitude": "99.15194",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.66",
                            "MeanSeaLevelPressure": "1010.46",
                            "AirTemperature": "24.7",
                            "DewPoint": "24.3",
                            "RelativeHumidity": "97",
                            "VaporPressure": "30.30",
                            "LandVisibility": "9.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "7.90"
                        }
                    },
                    {
                        "WmoStationNumber": "48552",
                        "StationNameThai": "นครศรีธรรมราช",
                        "StationNameEnglish": "NAKHONSI THAMMARAT",
                        "Province": "นครศรีธรรมราช",
                        "Latitude": "8.53778",
                        "Longitude": "99.94722",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1008.84",
                            "MeanSeaLevelPressure": "1009.48",
                            "AirTemperature": "25.0",
                            "DewPoint": "24.4",
                            "RelativeHumidity": "97",
                            "VaporPressure": "30.58",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "36.20"
                        }
                    },
                    {
                        "WmoStationNumber": "48554",
                        "StationNameThai": "นครศรีธรรมราช สกษ.",
                        "StationNameEnglish": "NAKHONSI THAMMARAT AGROMET.",
                        "Province": "นครศรีธรรมราช",
                        "Latitude": "8.35931",
                        "Longitude": "100.00000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.42",
                            "MeanSeaLevelPressure": "1009.83",
                            "AirTemperature": "25.2",
                            "DewPoint": "24.5",
                            "RelativeHumidity": "96",
                            "VaporPressure": "30.69",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "15.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48555",
                        "StationNameThai": "สุราษฎร์ธานี สกษ.",
                        "StationNameEnglish": "SURAT THANI AGROMET.",
                        "Province": "สุราษฎร์ธานี",
                        "Latitude": "9.10000",
                        "Longitude": "99.63333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1007.27",
                            "MeanSeaLevelPressure": "1011.53",
                            "AirTemperature": "24.8",
                            "DewPoint": "24.4",
                            "RelativeHumidity": "97",
                            "VaporPressure": "30.48",
                            "LandVisibility": "5.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "30.30"
                        }
                    },
                    {
                        "WmoStationNumber": "48556",
                        "StationNameThai": "พระแสง สอท.",
                        "StationNameEnglish": "PHRA SANG",
                        "Province": "สุราษฎร์ธานี",
                        "Latitude": "8.57022",
                        "Longitude": "99.25825",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1008.31",
                            "MeanSeaLevelPressure": "1009.94",
                            "AirTemperature": "24.8",
                            "DewPoint": "24.1",
                            "RelativeHumidity": "96",
                            "VaporPressure": "29.95",
                            "LandVisibility": "6.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "14.30"
                        }
                    },
                    {
                        "WmoStationNumber": "48557",
                        "StationNameThai": "ฉวาง",
                        "StationNameEnglish": "CHAWANG",
                        "Province": "นครศรีธรรมราช",
                        "Latitude": "8.42472",
                        "Longitude": "99.50667",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1006.03",
                            "MeanSeaLevelPressure": "1009.54",
                            "AirTemperature": "25.0",
                            "DewPoint": "24.7",
                            "RelativeHumidity": "98",
                            "VaporPressure": "31.12",
                            "LandVisibility": "6.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "20.80"
                        }
                    },
                    {
                        "WmoStationNumber": "48560",
                        "StationNameThai": "พัทลุง สกษ.",
                        "StationNameEnglish": "PHATTHALUNG AGROMET.",
                        "Province": "พัทลุง",
                        "Latitude": "7.58333",
                        "Longitude": "100.16667",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1008.24",
                            "MeanSeaLevelPressure": "1009.61",
                            "AirTemperature": "25.6",
                            "DewPoint": "25.4",
                            "RelativeHumidity": "99",
                            "VaporPressure": "32.53",
                            "LandVisibility": "8.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "1.20",
                            "Rainfall24Hr": "7.40"
                        }
                    },
                    {
                        "WmoStationNumber": "48561",
                        "StationNameThai": "ตะกั่วป่า",
                        "StationNameEnglish": "TAKUA PA",
                        "Province": "พังงา",
                        "Latitude": "8.68417",
                        "Longitude": "98.25222",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1010.22",
                            "MeanSeaLevelPressure": "1011.11",
                            "AirTemperature": "24.5",
                            "DewPoint": "24.3",
                            "RelativeHumidity": "99",
                            "VaporPressure": "30.46",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "69.10"
                        }
                    },
                    {
                        "WmoStationNumber": "48563",
                        "StationNameThai": "กระบี่",
                        "StationNameEnglish": "KRABI",
                        "Province": "กระบี่",
                        "Latitude": "8.10361",
                        "Longitude": "98.97528",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1006.44",
                            "MeanSeaLevelPressure": "1010.04",
                            "AirTemperature": "24.1",
                            "DewPoint": "23.8",
                            "RelativeHumidity": "98",
                            "VaporPressure": "29.48",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "7.40"
                        }
                    },
                    {
                        "WmoStationNumber": "48564",
                        "StationNameThai": "ภูเก็ต",
                        "StationNameEnglish": "PHUKET",
                        "Province": "ภูเก็ต",
                        "Latitude": "7.88333",
                        "Longitude": "98.40000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1010.16",
                            "MeanSeaLevelPressure": "1010.60",
                            "AirTemperature": "25.9",
                            "DewPoint": "23.1",
                            "RelativeHumidity": "85",
                            "VaporPressure": "28.26",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "22.70"
                        }
                    },
                    {
                        "WmoStationNumber": "48565",
                        "StationNameThai": "ภูเก็ต (ศูนย์ฯ)",
                        "StationNameEnglish": "PHUKET AIRPORT",
                        "Province": "ภูเก็ต",
                        "Latitude": "8.14500",
                        "Longitude": "98.31444",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1008.67",
                            "MeanSeaLevelPressure": "1009.67",
                            "AirTemperature": "25.3",
                            "DewPoint": "24.9",
                            "RelativeHumidity": "97",
                            "VaporPressure": "31.41",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "6.80"
                        }
                    },
                    {
                        "WmoStationNumber": "48566",
                        "StationNameThai": "เกาะลันตา",
                        "StationNameEnglish": "KO LANTA",
                        "Province": "กระบี่",
                        "Latitude": "7.53333",
                        "Longitude": "99.05000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1008.88",
                            "MeanSeaLevelPressure": "1009.70",
                            "AirTemperature": "25.1",
                            "DewPoint": "24.8",
                            "RelativeHumidity": "98",
                            "VaporPressure": "31.31",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "1.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48567",
                        "StationNameThai": "ตรัง",
                        "StationNameEnglish": "TRANG AIRPORT",
                        "Province": "ตรัง",
                        "Latitude": "7.51667",
                        "Longitude": "99.61667",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1007.56",
                            "MeanSeaLevelPressure": "1009.34",
                            "AirTemperature": "25.0",
                            "DewPoint": "24.3",
                            "RelativeHumidity": "96",
                            "VaporPressure": "30.32",
                            "LandVisibility": "7.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "148.60"
                        }
                    },
                    {
                        "WmoStationNumber": "48568",
                        "StationNameThai": "สงขลา",
                        "StationNameEnglish": "SONGKHLA",
                        "Province": "สงขลา",
                        "Latitude": "7.18211",
                        "Longitude": "100.60769",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1009.40",
                            "MeanSeaLevelPressure": "1010.15",
                            "AirTemperature": "25.4",
                            "DewPoint": "24.5",
                            "RelativeHumidity": "95",
                            "VaporPressure": "30.79",
                            "LandVisibility": "10.00",
                            "WindDirection": "280",
                            "WindSpeed": "5.6",
                            "Rainfall": "0.70",
                            "Rainfall24Hr": "1.60"
                        }
                    },
                    {
                        "WmoStationNumber": "48569",
                        "StationNameThai": "หาดใหญ่",
                        "StationNameEnglish": "HAT YAI AIRPORT",
                        "Province": "สงขลา",
                        "Latitude": "6.91667",
                        "Longitude": "100.43333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1004.66",
                            "MeanSeaLevelPressure": "1010.28",
                            "AirTemperature": "24.3",
                            "DewPoint": "23.7",
                            "RelativeHumidity": "97",
                            "VaporPressure": "29.29",
                            "LandVisibility": "10.00",
                            "WindDirection": "990",
                            "WindSpeed": "1.9",
                            "Rainfall": "0.40",
                            "Rainfall24Hr": "82.40"
                        }
                    },
                    {
                        "WmoStationNumber": "48570",
                        "StationNameThai": "สตูล",
                        "StationNameEnglish": "SATUN",
                        "Province": "สตูล",
                        "Latitude": "6.65000",
                        "Longitude": "100.08333",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1008.95",
                            "MeanSeaLevelPressure": "1010.04",
                            "AirTemperature": "25.5",
                            "DewPoint": "24.0",
                            "RelativeHumidity": "92",
                            "VaporPressure": "29.91",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "26.40"
                        }
                    },
                    {
                        "WmoStationNumber": "48571",
                        "StationNameThai": "คอหงษ์ สกษ.",
                        "StationNameEnglish": "KHO HONG AGROMET.",
                        "Province": "สงขลา",
                        "Latitude": "7.00000",
                        "Longitude": "100.50000",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1008.99",
                            "MeanSeaLevelPressure": "1010.11",
                            "AirTemperature": "24.4",
                            "DewPoint": "24.1",
                            "RelativeHumidity": "98",
                            "VaporPressure": "30.00",
                            "LandVisibility": "8.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "15.00"
                        }
                    },
                    {
                        "WmoStationNumber": "48574",
                        "StationNameThai": "สะเดา",
                        "StationNameEnglish": "SA DAO",
                        "Province": "สงขลา",
                        "Latitude": "6.79806",
                        "Longitude": "100.39056",
                        "Observation": {
                            "DateTime": "10/13/2024 01:00:00",
                            "StationPressure": "1007.25",
                            "MeanSeaLevelPressure": "1010.20",
                            "AirTemperature": "24.8",
                            "DewPoint": "24.4",
                            "RelativeHumidity": "97",
                            "VaporPressure": "30.48",
                            "LandVisibility": "10.00",
                            "WindDirection": "000",
                            "WindSpeed": "0.0",
                            "Rainfall": "0.00",
                            "Rainfall24Hr": "22.60"
                        }
                    }
                ]
            }
        }
    ]

    const { province } = useParams();
    const weatherData = WeatherHours[0].Stations.Station.find(
        (station) => station.Province === province
    );

    if (!weatherData) {
        return <div>ไม่พบข้อมูลสำหรับจังหวัด {province}</div>;
    }

    const { StationNameThai, Province } = weatherData;
    const { AirTemperature, WindSpeed, Rainfall } = weatherData.Observation;

    return (
        <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h2 className="text-3xl font-bold mb-4">
                    สถานี: {StationNameThai} ({Province})
                </h2>
                <p className="text-lg">
                    <span className="font-semibold">อุณหภูมิอากาศ:</span> {AirTemperature}°C
                </p>
                <p className="text-lg">
                    <span className="font-semibold">ความเร็วลม:</span> {WindSpeed} m/s
                </p>
                <p className="text-lg">
                    <span className="font-semibold">ปริมาณน้ำฝน:</span> {Rainfall} mm
                </p>
                <Link
                    to="/"
                    className="inline-block mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    กลับไปยังหน้ารายการ
                </Link>
            </div>
        </div>
    );
};

export default WeatherDetail;
