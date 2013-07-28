var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};

lu.bioControls.core.biorhythms.EstheticBiorhythm = function() {
    var biorhythm = null;

    this.getName = function() {
        return "Esthetic";
    };

    this.getPeriodLength = function() {
        return biorhythm.getPeriodLength();
    };

    this.getValue = function(dayIndex) {
        return biorhythm.getValue(dayIndex);
    };

    (function initialize() {
        biorhythm = new lu.bioControls.core.biorhythms.SinusoidalBiorhythm();
        biorhythm.setPeriodLength(43);
    }());
};