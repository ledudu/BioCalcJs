﻿// BioControls
// Copyright (C) 2013 Last Unicorn
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.

var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.biorhythmView = lu.bioControls.biorhythmView || {};
lu.bioControls.biorhythmView.coordinatesCalculation = lu.bioControls.biorhythmView.coordinatesCalculation || {};

lu.bioControls.biorhythmView.coordinatesCalculation.XDayMarkerCalculator = function() {

    var rawPaintData = null;
    var rect = null;

    // --------------------------------------------------------------------------
    // Functions - "public"
    // --------------------------------------------------------------------------

    this.calculate = function(data, rectangle) {
        rawPaintData = data;
        rect = rectangle;

        return calculateXDayMarker();
    };

    function calculateXDayMarker() {
        if (!rawPaintData.isXDayVisible) {
            return null;
        }

        var xStep = (rect.width) / rawPaintData.totalDays;
        var x = xStep * rawPaintData.xDayIndex;
        var y = 0;
        var width = xStep;
        var height = rect.height;

        return {
            rectangle: new lu.Rectangle(x, y, width, height),
            lineColor: rawPaintData.xDayBorderColor,
            lineWidth: rawPaintData.xDayBorderWidth
        };
    }
};