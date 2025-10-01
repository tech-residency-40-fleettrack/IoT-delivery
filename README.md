# Project Title: IoT-Powered Smart Logistics Dashboard
**Employer**: FleetTrack Solutions
**Primary Contact**: Ellijah Jimenez
**Team Composition**: 
| Role | Name | 
| ---- | ---- |
| Front End | Kyle Hill |
| Back End | Ross Gilmour |
| Back End | Fred Tuazon |
| Data Analyst | Reggie Chang |


## VISION & PURPOSE
**Business Problem:**
Fleet managers currently lack real-time visibility into vehicle locations, status, and predictive maintenance. This leads to breakdowns, delays, and higher operational costs due to reactive maintenance and inefficient manual tracking through spreadsheets.

**Target Users:**

- Primary: Fleet managers responsible for operations and vehicle uptime
- Secondary: Dispatchers/operations teams monitoring day-to-day activity
- Tertiary: Company leadership reviewing fleet performance dashboards

**Core Value Proposition:**
A centralized dashboard that provides real-time simulated data on fleet vehicles, predictive maintenance alerts, and KPIs for performance, helping managers reduce downtime, cut costs, and improve operational reliability.

**Success Criteria Definition:**
- Real-time simulated vehicle data available in the dashboard
- Predictive maintenance alerts visible to managers
- KPIs (uptime, fuel efficiency, reliability) accessible and understandable

## OBJECTIVES & SUCCESS METRICS (MVP)
| Objective | Metric of Success |
| --------- | ----------------- |
| Provide real-time fleet visibility | Vehicles displayed with simulated location and status updates |
| Enable predictive maintenance | Alerts generated for vehicles approaching maintenance thresholds |
| Track fleet performance KPIs | Uptime %, alerts per vehicle, efficiency trends visible in dashboards|

## CORE FEATURES (SCOPE)
### 1. Real-Time Vehicle Dashboard
**Description:**
Dashboard to display all vehicles with simulated live data (location, fuel, health).
**Role Responsibilities:**
- Frontend: Build interactive dashboard UI with maps and vehicle cards
- Backend: Create simulation service generating vehicle data streams
- Data: Structure vehicle data and store simulated logs

### 2. Predictive Maintenance Alerts
**Description:**
Generate alerts when vehicles reach thresholds (mileage, engine health).

**Role Responsibilities:**
- Frontend: Display alerts in dashboard with severity indicators
- Backend: Simulate IoT, MQTT
- Data: Track simulated mileage/health for predictions, Define rules for generating predictive alerts from data

### 3. KPI Dashboard

**Description:**
Display key performance metrics such as uptime %, alerts, fuel efficiency.

**Role Responsibilities:**
- Frontend: Visualize KPIs using charts/graphs
- Backend: Aggregate simulated data for reporting
- Data: Compute and log KPI metrics over time

### 4. Nice-to-Haves (If Time Permits)
<p> Driver profiles with performance metrics <br>
Export reports (CSV/PDF) <br>
Mobile responsiveness <p>
