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

window.lu = window.lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.biorhythms = lu.bioControls.biorhythms || {};

(function(AverageBiorhythm, IntellectualBiorhythm, IntuitiveBiorhythm) {
    /**
     * Represents the success biorhythm. It is a biorhythm obtained by
     * calculating the average between intellectual and intuitive biorhythms.
     *
     * @constructor
     */
    lu.bioControls.biorhythms.SuccessBiorhythm = function() {

        Object.defineProperty(this, "name", {
            value: "Success",
            writable: false,
            enumerable: true,
            configurable: false
        });

        (function initialize() {
            var intellectualBiorhythm = new IntellectualBiorhythm();
            var intuitiveBiorhythm = new IntuitiveBiorhythm();

            AverageBiorhythm.call(this, intellectualBiorhythm, intuitiveBiorhythm);
        }).call(this);
    };

    lu.bioControls.biorhythms.SuccessBiorhythm.inherit(AverageBiorhythm);

}(
        lu.bioControls.biorhythms.AverageBiorhythm,
        lu.bioControls.biorhythms.IntellectualBiorhythm,
        lu.bioControls.biorhythms.IntuitiveBiorhythm
    ));