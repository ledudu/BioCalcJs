var lu = lu || {};
lu.biorhythmControls = lu.biorhythmControls || {};
lu.biorhythmControls.BiorhythmView = function(id) {
  var canvas = null;
  var currentDayIndex = 0;
  var biorhythms = [];
  var biorhythmAddedEvent = new lu.Event;
  this.subscribeToBiorhythmAdded = biorhythmAddedEvent.subscribe;
  var biorhythmRemovedEvent = new lu.Event;
  this.subscribeToBiorhythmRemoved = biorhythmRemovedEvent.subscribe;
  this.addBiorhythm = function(biorhythmShape) {
    addBiorhythm(biorhythmShape)
  };
  this.setBiorhythms = function(value) {
    removeAllBiorhythms();
    for(var i = 0;i < value.length;i++) {
      addBiorhythm(value[i])
    }
    paint()
  };
  this.getBiorhythms = function() {
    var list = [];
    for(var i = 0;i < biorhythms.length;i++) {
      list.push(biorhythms[i])
    }
    return list
  };
  function addBiorhythm(biorhythmShape) {
    biorhythms.push(biorhythmShape);
    biorhythmShape.subscribeToNameChanged(onBiorhithmShapeChanged);
    biorhythmShape.subscribeToBirthdayChanged(onBiorhithmShapeChanged);
    biorhythmShape.subscribeToBiorhythmChanged(onBiorhithmShapeChanged);
    biorhythmShape.subscribeToColorChanged(onBiorhithmShapeChanged);
    biorhythmShape.subscribeToIsVisibleChanged(onBiorhithmShapeChanged);
    biorhythmShape.subscribeToLineWidthChanged(onBiorhithmShapeChanged);
    biorhythmShape.subscribeToLineStyleChanged(onBiorhithmShapeChanged);
    biorhythmAddedEvent.raise()
  }
  function onBiorhithmShapeChanged() {
    paint()
  }
  function removeAllBiorhythms() {
    for(var i = 0;i < biorhythms.length;i++) {
      removeBiorhythmAt(i)
    }
  }
  function removeBiorhythmAt(index) {
    biorhythms.splice(index, 1)
  }
  var firstDay = new Date(Date.now() - 7 * 24 * 60 * 60 * 1E3);
  var firstDayChangedEvent = new lu.Event;
  this.setFirstDay = setFirstDay;
  function setFirstDay(value) {
    firstDay = value;
    firstDayChangedEvent.raise();
    paint()
  }
  function incrementFirstDay(value) {
    var date = new Date(firstDay.getTime());
    date.setDate(date.getDate() + value);
    setFirstDay(date)
  }
  this.getFirstDay = function() {
    return firstDay
  };
  this.subscribeToFirstDayChanged = firstDayChangedEvent.subscribe;
  var isGridVisible = true;
  var isGridVisibleChangedEvent = new lu.Event;
  this.setGridVisibility = function(value) {
    isGridVisible = Boolean(value);
    isGridVisibleChangedEvent.raise();
    paint()
  };
  this.getGridVisibility = function() {
    return isGridVisible
  };
  this.subscribeToGridVisibilityChanged = isGridVisibleChangedEvent.subscribe;
  var totalDays = 30;
  var totalDaysChangedEvent = new lu.Event;
  this.setTotalDays = function(value) {
    totalDays = value;
    totalDaysChangedEvent.raise();
    paint()
  };
  this.getTotalDays = function() {
    return totalDays
  };
  this.subscribeToTotalDaysChanged = totalDaysChangedEvent.subscribe;
  var xDayIndex = 0;
  var xDayIndexChangedEvent = new lu.Event;
  this.setXDayIndex = function(value) {
    xDayIndex = value;
    xDayIndexChangedEvent.raise();
    paint()
  };
  this.getXDayIndex = function() {
    return xDayIndex
  };
  this.subscribeToXDayIndexChanged = xDayIndexChangedEvent.subscribe;
  var gridColor = "#d3d3d3";
  var gridColorChangedEvent = new lu.Event;
  this.setGridColor = function(value) {
    gridColor = value;
    gridColorChangedEvent.raise();
    paint()
  };
  this.getGridColor = function() {
    return xDayIndex
  };
  this.subscribeToGridColorChanged = gridColorChangedEvent.subscribe;
  var areDayNumbersVisible = true;
  var areDayNumbersVisibleChangedEvent = new lu.Event;
  this.setDayNumbersVisibility = function(value) {
    areDayNumbersVisible = value;
    areDayNumbersVisibleChangedEvent.raise();
    paint()
  };
  this.getDayNumbersVisibility = function() {
    return areDayNumbersVisible
  };
  this.subscribeToDayNumbersVisibilityChanged = areDayNumbersVisibleChangedEvent.subscribe;
  var areWeekDaysVisible = true;
  var areWeekDaysVisibleChangedEvent = new lu.Event;
  this.setWeekDaysVisibility = function(value) {
    areWeekDaysVisible = value;
    areWeekDaysVisibleChangedEvent.raise();
    paint()
  };
  this.getWeekDaysVisibility = function() {
    return areWeekDaysVisible
  };
  this.subscribeToWeekDaysVisibilityChanged = areWeekDaysVisibleChangedEvent.subscribe;
  var dayNumbersPosition = lu.DayLabelPosition.top;
  var dayNumbersPositionChangedEvent = new lu.Event;
  this.setDayNumbersPosition = function(value) {
    dayNumbersPosition = value;
    dayNumbersPositionChangedEvent.raise();
    paint()
  };
  this.getDayNumbersPosition = function() {
    return dayNumbersPosition
  };
  this.subscribeToTodayNumbersPositionChanged = dayNumbersPositionChangedEvent.subscribe;
  var weekDaysPosition = lu.DayLabelPosition.bottom;
  var weekDaysPositionChangedEvent = new lu.Event;
  this.setWeekDaysPosition = function(value) {
    weekDaysPosition = value;
    weekDaysPositionChangedEvent.raise();
    paint()
  };
  this.getWeekDaysPosition = function() {
    return weekDaysPosition
  };
  this.subscribeToWeekDaysPositionChanged = weekDaysPositionChangedEvent.subscribe;
  var areSundaysEmphasized = true;
  var areSundaysEmphasizedChangedEvent = new lu.Event;
  this.setAreSundaysEmphasized = function(value) {
    areSundaysEmphasized = value;
    areSundaysEmphasizedChangedEvent.raise();
    paint()
  };
  this.getAreSundaysEmphasized = function() {
    return areSundaysEmphasized
  };
  this.subscribeToAreSundaysEmphasizedChanged = areSundaysEmphasizedChangedEvent.subscribe;
  var foreColor = "#b0b0b0";
  var foreColorChangedEvent = new lu.Event;
  this.setForeColor = function(value) {
    foreColor = value;
    foreColorChangedEvent.raise();
    paint()
  };
  this.getForeColor = function() {
    return foreColor
  };
  this.subscribeToForeColorChanged = foreColorChangedEvent.subscribe;
  var sundaysColor = "#ff0000";
  var sundaysColorChangedEvent = new lu.Event;
  this.setSundaysColor = function(value) {
    sundaysColor = value;
    sundaysColorChangedEvent.raise();
    paint()
  };
  this.getSundaysColor = function() {
    return sundaysColor
  };
  this.subscribeToSundaysColorChanged = sundaysColorChangedEvent.subscribe;
  var font = "12px Arial";
  var fontChangedEvent = new lu.Event;
  this.setFont = function(value) {
    font = value;
    fontChangedEvent.raise();
    paint()
  };
  this.getFont = function() {
    return font
  };
  this.subscribeToFontChanged = fontChangedEvent.subscribe;
  var sundaysFont = "italic 12px Arial";
  var sundaysFontChangedEvent = new lu.Event;
  this.setSundaysFont = function(value) {
    sundaysFont = value;
    sundaysFontChangedEvent.raise();
    paint()
  };
  this.getSundaysFont = function() {
    return sundaysFont
  };
  this.subscribeToSundaysFontChanged = sundaysFontChangedEvent.subscribe;
  var todayBackColor = "#ffe4b5";
  var todayBackColorChangedEvent = new lu.Event;
  this.setTodayBackColor = function(value) {
    todayBackColor = value;
    todayBackColorChangedEvent.raise();
    paint()
  };
  this.getTodayBackColor = function() {
    return todayBackColor
  };
  this.subscribeToTodayBackColorChanged = todayBackColorChangedEvent.subscribe;
  var painter = null;
  function paint() {
    var rawPaintData = {biorhythmShapes:biorhythms, firstDay:firstDay, totalDays:totalDays, xDayIndex:xDayIndex, gridColor:gridColor, isGridVisible:isGridVisible, todayBackColor:todayBackColor, areDayNumbersVisible:areDayNumbersVisible, areWeekDaysVisible:areWeekDaysVisible, dayNumbersPosition:dayNumbersPosition, weekDaysPosition:weekDaysPosition, areSundaysEmphasized:areSundaysEmphasized, foreColor:foreColor, sundaysColor:sundaysColor, font:font, sundaysFont:sundaysFont};
    painter.paint(rawPaintData, canvas)
  }
  this.getPaintCount = function() {
    return painter.getPaintCount()
  };
  var moveStepLength = 0;
  var ctrlPressed = false;
  var buttonPressed = lu.MouseButton.none;
  function onMouseDown(evt) {
    if(evt.which !== lu.MouseButton.left && evt.which !== lu.MouseButton.right) {
      return
    }
    var rect = canvas.getBoundingClientRect();
    var clickX = evt.clientX - rect.left;
    moveStepLength = canvas.width / totalDays;
    currentDayIndex = Math.floor(clickX / moveStepLength);
    buttonPressed = evt.which
  }
  function onMouseMove(evt) {
    if(buttonPressed !== lu.MouseButton.left && buttonPressed !== lu.MouseButton.right) {
      return
    }
    var rect = canvas.getBoundingClientRect();
    var clickX = evt.clientX - rect.left;
    var index = Math.floor(clickX / moveStepLength);
    var steps = index - currentDayIndex;
    if(steps == 0) {
      return
    }
    currentDayIndex = index;
    if(ctrlPressed || buttonPressed === lu.MouseButton.right) {
      xDayIndex += steps;
      paint()
    }else {
      incrementFirstDay(-steps)
    }
    evt.preventDefault();
    evt.stopPropagation()
  }
  function onMouseUp(evt) {
    if(evt.which === lu.MouseButton.left || evt.which === lu.MouseButton.right) {
      buttonPressed = lu.MouseButton.none
    }
  }
  function onMouseOut() {
    buttonPressed = lu.MouseButton.none
  }
  function onWheel(evt) {
    evt.preventDefault();
    var delta = evt.detail ? evt.detail : evt.wheelDelta / -120;
    incrementFirstDay(delta)
  }
  function onKeyDown(evt) {
    if(evt.keyCode === 17) {
      ctrlPressed = true
    }
  }
  function onKeyUp(evt) {
    if(evt.keyCode === 17) {
      ctrlPressed = false
    }
  }
  (function initialize() {
    var mouseWheelEventName = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
    canvas = document.getElementById(id);
    canvas.addEventListener("mousemove", onMouseMove, false);
    canvas.addEventListener("mousedown", onMouseDown, false);
    canvas.addEventListener("mouseup", onMouseUp, false);
    canvas.addEventListener("mouseout", onMouseOut, false);
    canvas.addEventListener(mouseWheelEventName, onWheel, false);
    canvas.addEventListener("keydown", onKeyDown, false);
    canvas.addEventListener("keyup", onKeyUp, false);
    painter = new lu.biorhythmControls.common.painting.BiorhythmViewPainter
  })()
};
var lu = lu || {};
lu.DayLabelPosition = {top:0, aboveMiddle:1, belowMiddle:2, bottom:3};
var lu = lu || {};
lu.biorhythmControls = lu.biorhythmControls || {};
lu.biorhythmControls.common = lu.biorhythmControls.common || {};
lu.biorhythmControls.common.biorhythmModel = lu.biorhythmControls.common.biorhythmModel || {};
lu.biorhythmControls.common.biorhythmModel.BiorhythmShape = function() {
  var name = "New Biorhythm Shape";
  var nameChangedEvent = new lu.Event;
  this.subscribeToNameChanged = function(eventHandler) {
    nameChangedEvent.subscribe(eventHandler)
  };
  this.getName = function() {
    return name
  };
  this.setName = function(value) {
    if(value === name) {
      return
    }
    name = value;
    nameChangedEvent.raise()
  };
  var birthday = Date(80, 5, 13);
  var birthdayChangedEvent = new lu.Event;
  this.subscribeToBirthdayChanged = function(eventHandler) {
    birthdayChangedEvent.subscribe(eventHandler)
  };
  this.getBirthday = function() {
    return birthday
  };
  this.setBirthday = function(value) {
    if(value === birthday) {
      return
    }
    birthday = value;
    birthdayChangedEvent.raise()
  };
  var biorhythm = null;
  var biorhythmChangedEvent = new lu.Event;
  this.subscribeToBiorhythmChanged = function(eventHandler) {
    biorhythmChangedEvent.subscribe(eventHandler)
  };
  this.getBiorhythm = function() {
    return biorhythm
  };
  this.setBiorhythm = function(value) {
    if(value === biorhythm) {
      return
    }
    biorhythm = value;
    biorhythmChangedEvent.raise()
  };
  var color = null;
  var colorChangedEvent = new lu.Event;
  this.subscribeToColorChanged = function(eventHandler) {
    colorChangedEvent.subscribe(eventHandler)
  };
  this.getColor = function() {
    return color
  };
  this.setColor = function(value) {
    if(value === color) {
      return
    }
    color = value;
    colorChangedEvent.raise()
  };
  var isVisible = true;
  var isVisibleChangedEvent = new lu.Event;
  this.subscribeToIsVisibleChanged = function(eventHandler) {
    isVisibleChangedEvent.subscribe(eventHandler)
  };
  this.getIsVisible = function() {
    return isVisible
  };
  this.setIsVisible = function(value) {
    if(value === isVisible) {
      return
    }
    isVisible = value;
    isVisibleChangedEvent.raise()
  };
  var lineWidth = 1;
  var lineWidthChangedEvent = new lu.Event;
  this.subscribeToLineWidthChanged = function(eventHandler) {
    lineWidthChangedEvent.subscribe(eventHandler)
  };
  this.getLineWidth = function() {
    return lineWidth
  };
  this.setLineWidth = function(value) {
    if(value === lineWidth) {
      return
    }
    lineWidth = value;
    lineWidthChangedEvent.raise()
  };
  var lineStyle = lu.LineStyle.solid;
  var lineStyleChangedEvent = new lu.Event;
  this.subscribeToLineStyleChanged = function(eventHandler) {
    lineStyleChangedEvent.subscribe(eventHandler)
  };
  this.getLineStyle = function() {
    return lineStyle
  };
  this.setLineStyle = function(value) {
    if(value === lineStyle) {
      return
    }
    lineStyle = value;
    lineStyleChangedEvent.raise()
  }
};
var lu = lu || {};
lu.biorhythmControls = lu.biorhythmControls || {};
lu.biorhythmControls.common = lu.biorhythmControls.common || {};
lu.biorhythmControls.common.paintDataCalculation = lu.biorhythmControls.common.paintDataCalculation || {};
lu.biorhythmControls.common.paintDataCalculation.BiorhythmCurvesCalculator = function() {
  var nextCalculator;
  var rawPaintData;
  var canvas;
  var margin = 10;
  this.calculate = function(data, canvasElement) {
    rawPaintData = data;
    canvas = canvasElement;
    return calculateBiorhythms()
  };
  function calculateBiorhythms() {
    var values = [];
    var points;
    for(var i = 0;i < rawPaintData.biorhythmShapes.length;i++) {
      if(!rawPaintData.biorhythmShapes[i].getIsVisible()) {
        continue
      }
      var biorhythm = rawPaintData.biorhythmShapes[i].getBiorhythm();
      var birthday = rawPaintData.biorhythmShapes[i].getBirthday();
      points = calculateBiorhythmPoints(biorhythm, birthday);
      values.push({points:points, color:rawPaintData.biorhythmShapes[i].getColor(), lineWidth:rawPaintData.biorhythmShapes[i].getLineWidth(), lineStyle:rawPaintData.biorhythmShapes[i].getLineStyle()})
    }
    return values
  }
  function calculateBiorhythmPoints(biorhythm, birthday) {
    var xStep = canvas.width / rawPaintData.totalDays;
    var xOffset = xStep / 2;
    var yOffset = margin + (canvas.height - 2 * margin) / 2;
    var amplitude = canvas.height / 2 - 2 * margin;
    var milisecondsLived = rawPaintData.firstDay - birthday;
    var daysLived = Math.floor(milisecondsLived / 1E3 / 60 / 60 / 24);
    var points = [];
    for(var index = 0;index < rawPaintData.totalDays;index++) {
      var x = xOffset + index * xStep;
      var y = yOffset - biorhythm.getValue(daysLived + index) * amplitude;
      points[index] = new lu.Point(x, y)
    }
    return points
  }
};
var lu = lu || {};
lu.biorhythmControls = lu.biorhythmControls || {};
lu.biorhythmControls.common = lu.biorhythmControls.common || {};
lu.biorhythmControls.common.painting = lu.biorhythmControls.common.painting || {};
lu.biorhythmControls.common.painting.BiorhythmCurvesPainter = function() {
  var dataToPaint = null;
  var paintContext = null;
  this.paint = function(context, data) {
    paintContext = context;
    dataToPaint = data;
    paintBiorhythms()
  };
  function paintBiorhythms() {
    for(var i = 0;i < dataToPaint.length;i++) {
      paintBiorhythm(dataToPaint[i])
    }
  }
  function paintBiorhythm(biorhythmData) {
    var linePattern = calculateLinePattern(biorhythmData.lineStyle, biorhythmData.lineWidth);
    setLinePattern(linePattern);
    paintContext.strokeStyle = biorhythmData.color;
    paintContext.lineWidth = biorhythmData.lineWidth;
    paintContext.lineJoin = "round";
    paintContext.beginPath();
    for(var i = 0;i < biorhythmData.points.length;i++) {
      paintContext.lineTo(biorhythmData.points[i].getX(), biorhythmData.points[i].getY())
    }
    paintContext.stroke()
  }
  function calculateLinePattern(lineStyle, lineWidth) {
    switch(lineStyle) {
      case lu.LineStyle.solid:
        return null;
      case lu.LineStyle.dot:
        return[lineWidth * 1, lineWidth * 3];
      case lu.LineStyle.dash:
        return[lineWidth * 10, lineWidth * 5];
      case lu.LineStyle.dashDot:
        return[lineWidth * 10, lineWidth * 3, lineWidth * 1, lineWidth * 3];
      case lu.LineStyle.dashDotDot:
        return[lineWidth * 10, lineWidth * 3, lineWidth * 1, lineWidth * 3, lineWidth * 1, lineWidth * 3];
      default:
        return null
    }
  }
  function setLinePattern(linePattern) {
    if(paintContext.mozDash !== undefined) {
      paintContext.mozDash = linePattern
    }
    if(typeof paintContext.setLineDash === "function") {
      paintContext.setLineDash(linePattern)
    }
  }
};
var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};
lu.bioControls.core.biorhythms.AverageBiorhythm = function(biorhythmA, biorhythmB) {
  function getValue(dayIndex) {
    return(biorhythmA.getValue(dayIndex) + biorhythmB.getValue(dayIndex)) / 2
  }
  this.getValue = getValue
};
var lu = lu || {};
lu.Event = function() {
  var eventHandlers = [];
  this.subscribe = function(eventHandler) {
    if(typeof eventHandler !== "function") {
      return
    }
    eventHandlers.push(eventHandler)
  };
  this.raise = function() {
    for(var i = 0;i < eventHandlers.length;i++) {
      eventHandlers[i]()
    }
  }
};
var lu = lu || {};
lu.Line = function(startPoint, endPoint) {
  this.getStartPoint = function() {
    return startPoint
  };
  this.getEndPoint = function() {
    return endPoint
  };
  this.toString = function() {
    return startPoint.toString() + " - " + endPoint.toString()
  }
};
var lu = lu || {};
lu.LineStyle = {solid:0, dash:1, dot:2, dashDot:3, dashDotDot:4};
var lu = lu || {};
lu.MouseButton = {none:0, left:1, middle:2, right:3};
var lu = lu || {};
lu.Point = function(x, y) {
  this.getX = function getX() {
    return x
  };
  this.getY = function getY() {
    return y
  };
  this.toString = function() {
    return"[" + x + "; " + y + "]"
  }
};
var lu = lu || {};
lu.Rectangle = function(left, top, width, height) {
  this.getLeft = function() {
    return left
  };
  this.getTop = function() {
    return top
  };
  this.getWidth = function() {
    return width
  };
  this.getHeight = function() {
    return height
  };
  this.toString = function() {
    return"[" + left.toString() + ", " + top.toString() + "] w=" + width.toString() + "; h=" + height.toString()
  }
};
var lu = lu || {};
lu.TextUtil = function() {
  function measureText(obj) {
    if(!obj) {
      return[0, 0]
    }
    var div = document.createElement("div");
    div.innerHTML = obj.text;
    div.style.position = "absolute";
    div.style.top = "-100px";
    div.style.left = "-100px";
    div.style.font = obj.font;
    div.style.fontWeight = obj.isBold ? "bold" : "normal";
    div.style.fontStyle = obj.isItalic ? "italic" : "normal";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    var size = [div.offsetWidth, div.offsetHeight];
    document.body.removeChild(div);
    return size
  }
  return{measureText:measureText}
}();
var lu = lu || {};
lu.biorhythmControls = lu.biorhythmControls || {};
lu.biorhythmControls.common = lu.biorhythmControls.common || {};
lu.biorhythmControls.common.biorhythmModel = lu.biorhythmControls.common.biorhythmModel || {};
lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes = function() {
  var physicalShape = null;
  var emotionalShape = null;
  var intellectualShape = null;
  var intuitiveShape = null;
  var passionShape = null;
  var masteryShape = null;
  var wisdomShape = null;
  var perceptionShape = null;
  var psychicShape = null;
  var successShape = null;
  var estheticShape = null;
  var selfAwarenessShape = null;
  var spiritualShape = null;
  function createBiorhythmShapes() {
    physicalShape = lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createPhysicalBiorhythmShape();
    emotionalShape = lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createEmotionalBiorhythmShape();
    intellectualShape = lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createIntellectualBiorhythmShape();
    intuitiveShape = lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createIntuitiveBiorhythmShape();
    passionShape = lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createPassionBiorhythmShape();
    passionShape.setIsVisible(false);
    masteryShape = lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createMasteryBiorhythmShape();
    masteryShape.setIsVisible(false);
    wisdomShape = lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createWisdomBiorhythmShape();
    wisdomShape.setIsVisible(false);
    perceptionShape = lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createPerceptionBiorhythmShape();
    perceptionShape.setIsVisible(false);
    psychicShape = lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createPsychicBiorhythmShape();
    psychicShape.setIsVisible(false);
    successShape = lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createSuccessBiorhythmShape();
    successShape.setIsVisible(false);
    estheticShape = lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createEstheticBiorhythmShape();
    estheticShape.setIsVisible(false);
    selfAwarenessShape = lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createSelfAwarenessBiorhythmShape();
    selfAwarenessShape.setIsVisible(false);
    spiritualShape = lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createSpiritualBiorhythmShape();
    spiritualShape.setIsVisible(false)
  }
  this.getPhysicalShape = function getPhysicalShape() {
    return physicalShape
  };
  this.getEmotionalShape = function() {
    return emotionalShape
  };
  this.getIntellectualShape = function() {
    return intellectualShape
  };
  this.getIntuitiveShape = function() {
    return intuitiveShape
  };
  this.getPrimaryBiorhythmShapes = function() {
    return[physicalShape, emotionalShape, intellectualShape, intuitiveShape]
  };
  this.getPassionShape = function() {
    return passionShape
  };
  this.getMasteryShape = function() {
    return masteryShape
  };
  this.getWisdomShape = function() {
    return wisdomShape
  };
  this.getSecondaryBiorhythmShapes = function() {
    return[passionShape, masteryShape, wisdomShape]
  };
  this.getPerceptionShape = function() {
    return perceptionShape
  };
  this.getPsychicShape = function() {
    return psychicShape
  };
  this.getSuccessShape = function() {
    return successShape
  };
  this.getExtraBiorhythmShapes = function() {
    return[perceptionShape, psychicShape, successShape]
  };
  this.getEstheticShape = function() {
    return estheticShape
  };
  this.getSelfAwarenessShape = function() {
    return selfAwarenessShape
  };
  this.getSpiritualShape = function() {
    return spiritualShape
  };
  this.getIChingBiorhythmShapes = function() {
    return[estheticShape, selfAwarenessShape, spiritualShape]
  };
  this.getAll = function() {
    return[physicalShape, emotionalShape, intellectualShape, intuitiveShape, passionShape, masteryShape, wisdomShape, perceptionShape, psychicShape, successShape, estheticShape, selfAwarenessShape, spiritualShape]
  };
  (function initialize() {
    createBiorhythmShapes()
  })()
};
lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday = new Date(1980, 5, 13);
lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createPhysicalBiorhythmShape = function() {
  var biorhythm = new lu.bioControls.core.biorhythms.PhysicalBiorhythm;
  var shape = new lu.biorhythmControls.common.biorhythmModel.BiorhythmShape;
  shape.setName(biorhythm.getName() + " Shape");
  shape.setBiorhythm(biorhythm);
  shape.setColor("#ff0000");
  shape.setBirthday(lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday);
  return shape
};
lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createEmotionalBiorhythmShape = function() {
  var biorhythm = new lu.bioControls.core.biorhythms.EmotionalBiorhythm;
  var shape = new lu.biorhythmControls.common.biorhythmModel.BiorhythmShape;
  shape.setName(biorhythm.getName() + " Shape");
  shape.setBiorhythm(biorhythm);
  shape.setColor("#32cd32");
  shape.setBirthday(lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday);
  return shape
};
lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createIntellectualBiorhythmShape = function() {
  var biorhythm = new lu.bioControls.core.biorhythms.IntellectualBiorhythm;
  var shape = new lu.biorhythmControls.common.biorhythmModel.BiorhythmShape;
  shape.setName(biorhythm.getName() + " Shape");
  shape.setBiorhythm(biorhythm);
  shape.setColor("#1e90ff");
  shape.setBirthday(lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday);
  return shape
};
lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createIntuitiveBiorhythmShape = function() {
  var biorhythm = new lu.bioControls.core.biorhythms.IntuitiveBiorhythm;
  var shape = new lu.biorhythmControls.common.biorhythmModel.BiorhythmShape;
  shape.setName(biorhythm.getName() + " Shape");
  shape.setBiorhythm(biorhythm);
  shape.setColor("#ffa500");
  shape.setBirthday(lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday);
  return shape
};
lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createPassionBiorhythmShape = function() {
  var biorhythm = new lu.bioControls.core.biorhythms.PassionBiorhythm;
  var shape = new lu.biorhythmControls.common.biorhythmModel.BiorhythmShape;
  shape.setName(biorhythm.getName() + " Shape");
  shape.setBiorhythm(biorhythm);
  shape.setColor("#ff0000");
  shape.setLineStyle(lu.LineStyle.dash);
  shape.setBirthday(lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday);
  return shape
};
lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createMasteryBiorhythmShape = function() {
  var biorhythm = new lu.bioControls.core.biorhythms.MasteryBiorhythm;
  var shape = new lu.biorhythmControls.common.biorhythmModel.BiorhythmShape;
  shape.setName(biorhythm.getName() + " Shape");
  shape.setBiorhythm(biorhythm);
  shape.setColor("#1e90ff");
  shape.setLineStyle(lu.LineStyle.dashDot);
  shape.setBirthday(lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday);
  return shape
};
lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createWisdomBiorhythmShape = function() {
  var biorhythm = new lu.bioControls.core.biorhythms.WisdomBiorhythm;
  var shape = new lu.biorhythmControls.common.biorhythmModel.BiorhythmShape;
  shape.setName(biorhythm.getName() + " Shape");
  shape.setBiorhythm(biorhythm);
  shape.setColor("#32cd32");
  shape.setLineStyle(lu.LineStyle.dashDotDot);
  shape.setBirthday(lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday);
  return shape
};
lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createPerceptionBiorhythmShape = function() {
  var biorhythm = new lu.bioControls.core.biorhythms.PerceptionBiorhythm;
  var shape = new lu.biorhythmControls.common.biorhythmModel.BiorhythmShape;
  shape.setName(biorhythm.getName() + " Shape");
  shape.setBiorhythm(biorhythm);
  shape.setColor("#ff0000");
  shape.setLineStyle(lu.LineStyle.dash);
  shape.setBirthday(lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday);
  return shape
};
lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createPsychicBiorhythmShape = function() {
  var biorhythm = new lu.bioControls.core.biorhythms.PsychicBiorhythm;
  var shape = new lu.biorhythmControls.common.biorhythmModel.BiorhythmShape;
  shape.setName(biorhythm.getName() + " Shape");
  shape.setBiorhythm(biorhythm);
  shape.setColor("#32cd32");
  shape.setLineStyle(lu.LineStyle.dashDot);
  shape.setBirthday(lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday);
  return shape
};
lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createSuccessBiorhythmShape = function() {
  var biorhythm = new lu.bioControls.core.biorhythms.SuccessBiorhythm;
  var shape = new lu.biorhythmControls.common.biorhythmModel.BiorhythmShape;
  shape.setName(biorhythm.getName() + " Shape");
  shape.setBiorhythm(biorhythm);
  shape.setColor("#1e90ff");
  shape.setLineStyle(lu.LineStyle.dashDotDot);
  shape.setBirthday(lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday);
  return shape
};
lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createEstheticBiorhythmShape = function() {
  var biorhythm = new lu.bioControls.core.biorhythms.EstheticBiorhythm;
  var shape = new lu.biorhythmControls.common.biorhythmModel.BiorhythmShape;
  shape.setName(biorhythm.getName() + " Shape");
  shape.setBiorhythm(biorhythm);
  shape.setColor("#ff0000");
  shape.setBirthday(lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday);
  return shape
};
lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createSelfAwarenessBiorhythmShape = function() {
  var biorhythm = new lu.bioControls.core.biorhythms.SelfAwarenessBiorhythm;
  var shape = new lu.biorhythmControls.common.biorhythmModel.BiorhythmShape;
  shape.setName(biorhythm.getName() + " Shape");
  shape.setBiorhythm(biorhythm);
  shape.setColor("#1e90ff");
  shape.setBirthday(lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday);
  return shape
};
lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.createSpiritualBiorhythmShape = function() {
  var biorhythm = new lu.bioControls.core.biorhythms.SpiritualBiorhythm;
  var shape = new lu.biorhythmControls.common.biorhythmModel.BiorhythmShape;
  shape.setName(biorhythm.getName() + " Shape");
  shape.setBiorhythm(biorhythm);
  shape.setColor("#ffa500");
  shape.setBirthday(lu.biorhythmControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday);
  return shape
};
var lu = lu || {};
lu.biorhythmControls = lu.biorhythmControls || {};
lu.biorhythmControls.common = lu.biorhythmControls.common || {};
lu.biorhythmControls.common.paintDataCalculation = lu.biorhythmControls.common.paintDataCalculation || {};
lu.biorhythmControls.common.paintDataCalculation.DayLablesCalculator = function() {
  var nextCalculator;
  var rawPaintData;
  var canvas;
  var textHeight;
  this.calculate = function(data, canvasElement) {
    rawPaintData = data;
    canvas = canvasElement;
    calculateTextSize();
    return calculateDayLabels()
  };
  function calculateTextSize() {
    var textSize = lu.TextUtil.measureText({text:"0jf", font:rawPaintData.font});
    var textSizeEmphasized = lu.TextUtil.measureText({text:"0jf", font:rawPaintData.sundaysFont});
    textHeight = Math.max(textSize[1], textSizeEmphasized[1])
  }
  function calculateDayLabels() {
    var areDayNumbersVisible = rawPaintData.areDayNumbersVisible;
    var areWeekDaysVisible = rawPaintData.areWeekDaysVisible && !(rawPaintData.areDayNumbersVisible && rawPaintData.weekDaysPosition === rawPaintData.dayNumbersPosition);
    if(!areDayNumbersVisible && !areWeekDaysVisible) {
      return null
    }
    var dayLabelsPaintData = [];
    var day = new Date(rawPaintData.firstDay.getTime());
    var xStep = canvas.width / rawPaintData.totalDays;
    for(var i = 0;i < rawPaintData.totalDays;i++) {
      if(areDayNumbersVisible) {
        dayLabelsPaintData.push(calculateDayNumberPaintInfo(i, day))
      }
      if(areWeekDaysVisible) {
        dayLabelsPaintData.push(calculateWeekDayPaintInfo(day, i))
      }
      day.setDate(day.getDate() + 1)
    }
    return{labels:dayLabelsPaintData, color:rawPaintData.foreColor, emphasizedColor:rawPaintData.sundaysColor, font:rawPaintData.font, emphasizedFont:rawPaintData.sundaysFont}
  }
  function calculateDayNumberPaintInfo(i, day) {
    var location = calculateDayNumberLocation(i, rawPaintData.dayNumbersPosition);
    var isEmphasized = rawPaintData.areSundaysEmphasized && day.getDay() === 0;
    return{text:day.getDate().toString(), location:location, isEmphasized:isEmphasized}
  }
  function calculateWeekDayPaintInfo(day, i) {
    var location = calculateDayNumberLocation(i, rawPaintData.weekDaysPosition);
    var isEmphasized = rawPaintData.areSundaysEmphasized && day.getDay() === 0;
    return{text:day.getDay().toString(), location:location, isEmphasized:isEmphasized}
  }
  function calculateDayNumberLocation(index, position) {
    var xStep = canvas.width / rawPaintData.totalDays;
    var daysFontHeight = (textHeight + 3) / 2;
    switch(position) {
      case lu.DayLabelPosition.top:
        return new lu.Point(xStep * index + xStep / 2, daysFontHeight);
      default:
      ;
      case lu.DayLabelPosition.aboveMiddle:
        return new lu.Point(xStep * index + xStep / 2, canvas.height / 2 - daysFontHeight);
      case lu.DayLabelPosition.belowMiddle:
        return new lu.Point(xStep * index + xStep / 2, canvas.height / 2 + daysFontHeight);
      case lu.DayLabelPosition.bottom:
        return new lu.Point(xStep * index + xStep / 2, canvas.height - daysFontHeight)
    }
  }
};
var lu = lu || {};
lu.biorhythmControls = lu.biorhythmControls || {};
lu.biorhythmControls.common = lu.biorhythmControls.common || {};
lu.biorhythmControls.common.paintDataCalculation = lu.biorhythmControls.common.paintDataCalculation || {};
lu.biorhythmControls.common.paintDataCalculation.GridLinesCalculator = function() {
  var rawPaintData;
  var canvas;
  this.calculate = function(data, canvasElement) {
    rawPaintData = data;
    canvas = canvasElement;
    return calculateGridLines()
  };
  function calculateGridLines() {
    if(!rawPaintData.isGridVisible) {
      return null
    }
    var lines = [];
    for(var i = 0;i < rawPaintData.totalDays - 1;i++) {
      var line = createDaySeparatorLine(i);
      lines.push(line)
    }
    var axis = createXAxis();
    lines.push(axis);
    return{lines:lines, color:rawPaintData.gridColor}
  }
  function createDaySeparatorLine(dayIndex) {
    var xStep = canvas.width / rawPaintData.totalDays;
    var index = dayIndex + 1;
    var startPoint = new lu.Point(xStep * index, 0);
    var endPoint = new lu.Point(xStep * index, canvas.height);
    return new lu.Line(startPoint, endPoint)
  }
  function createXAxis() {
    var startPoint = new lu.Point(0, canvas.height / 2);
    var endPoint = new lu.Point(canvas.width, canvas.height / 2);
    return new lu.Line(startPoint, endPoint)
  }
};
var lu = lu || {};
lu.biorhythmControls = lu.biorhythmControls || {};
lu.biorhythmControls.common = lu.biorhythmControls.common || {};
lu.biorhythmControls.common.paintDataCalculation = lu.biorhythmControls.common.paintDataCalculation || {};
lu.biorhythmControls.common.paintDataCalculation.PaintDataCalculator = function() {
  var biorhythmCurvesCalculator;
  var gridLinesCalculator;
  var dayLabelsCalculator;
  var todayCalculator;
  this.calculate = function(data, canvasElement) {
    return{biorhythms:biorhythmCurvesCalculator.calculate(data, canvasElement), gridLines:gridLinesCalculator.calculate(data, canvasElement), dayLabels:dayLabelsCalculator.calculate(data, canvasElement), todayMarker:todayCalculator.calculate(data, canvasElement)}
  };
  (function initialize() {
    biorhythmCurvesCalculator = new lu.biorhythmControls.common.paintDataCalculation.BiorhythmCurvesCalculator;
    gridLinesCalculator = new lu.biorhythmControls.common.paintDataCalculation.GridLinesCalculator;
    dayLabelsCalculator = new lu.biorhythmControls.common.paintDataCalculation.DayLablesCalculator;
    todayCalculator = new lu.biorhythmControls.common.paintDataCalculation.TodayCalculator
  })()
};
var lu = lu || {};
lu.biorhythmControls = lu.biorhythmControls || {};
lu.biorhythmControls.common = lu.biorhythmControls.common || {};
lu.biorhythmControls.common.paintDataCalculation = lu.biorhythmControls.common.paintDataCalculation || {};
lu.biorhythmControls.common.paintDataCalculation.TodayCalculator = function() {
  var rawPaintData;
  var canvas;
  this.calculate = function(data, canvasElement) {
    rawPaintData = data;
    canvas = canvasElement;
    return calculateTodayRectangle()
  };
  function calculateTodayRectangle() {
    var todayIndex = calculateTodayIndex();
    var todayIsVisible = todayIndex >= 0 && todayIndex < rawPaintData.totalDays;
    if(!todayIsVisible) {
      return null
    }
    var xStep = canvas.width / rawPaintData.totalDays;
    var x = todayIndex * xStep;
    var y = 0;
    var width = xStep;
    var height = canvas.height;
    return{rectangle:new lu.Rectangle(x, y, width, height), color:rawPaintData.todayBackColor}
  }
  function calculateTodayIndex() {
    var today = getDateComponent(new Date);
    var firstDay = getDateComponent(rawPaintData.firstDay);
    var todayIndexInMiliseconds = today - firstDay;
    return Math.floor(todayIndexInMiliseconds / 1E3 / 60 / 60 / 24)
  }
  function getDateComponent(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate())
  }
};
var lu = lu || {};
lu.biorhythmControls = lu.biorhythmControls || {};
lu.biorhythmControls.common = lu.biorhythmControls.common || {};
lu.biorhythmControls.common.painting = lu.biorhythmControls.common.painting || {};
lu.biorhythmControls.common.painting.BiorhythmViewPainter = function() {
  var rawPaintData = null;
  var canvas = null;
  var paintCount = 0;
  this.getPaintCount = function() {
    return paintCount
  };
  this.paint = function(data, canvasElement) {
    paintCount++;
    rawPaintData = data;
    canvas = canvasElement;
    var paintDataCalculator = new lu.biorhythmControls.common.paintDataCalculation.PaintDataCalculator;
    var dataToPaint = paintDataCalculator.calculate(rawPaintData, canvas);
    paintAll(dataToPaint)
  };
  function paintAll(dataToPaint) {
    if(canvas.getContext) {
      var context = canvas.getContext("2d");
      clearCanvas(context);
      var todayPainter = new lu.biorhythmControls.common.painting.TodayPainter;
      todayPainter.paint(context, dataToPaint.todayMarker);
      var gridLinesPainter = new lu.biorhythmControls.common.painting.GridLinesPainter;
      gridLinesPainter.paint(context, dataToPaint.gridLines);
      var biorhythmCurvesPainter = new lu.biorhythmControls.common.painting.BiorhythmCurvesPainter;
      biorhythmCurvesPainter.paint(context, dataToPaint.biorhythms);
      var dayLabelsPainter = new lu.biorhythmControls.common.painting.DayLabelsPainter;
      dayLabelsPainter.paint(context, dataToPaint.dayLabels)
    }
  }
  function clearCanvas(context) {
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height)
  }
};
var lu = lu || {};
lu.biorhythmControls = lu.biorhythmControls || {};
lu.biorhythmControls.common = lu.biorhythmControls.common || {};
lu.biorhythmControls.common.painting = lu.biorhythmControls.common.painting || {};
lu.biorhythmControls.common.painting.DayLabelsPainter = function() {
  var dataToPaint = null;
  var paintContext = null;
  this.paint = function(context, data) {
    paintContext = context;
    dataToPaint = data;
    paintLabels()
  };
  function paintLabels() {
    paintContext.textAlign = "center";
    paintContext.textBaseline = "middle";
    var labelCount = dataToPaint.labels.length;
    for(var i = 0;i < labelCount;i++) {
      paintLabel(dataToPaint.labels[i])
    }
  }
  function paintLabel(label) {
    if(label.isEmphasized) {
      paintContext.fillStyle = dataToPaint.emphasizedColor;
      paintContext.font = dataToPaint.emphasizedFont
    }else {
      paintContext.fillStyle = dataToPaint.color;
      paintContext.font = dataToPaint.font
    }
    paintContext.fillText(label.text, label.location.getX(), label.location.getY())
  }
};
var lu = lu || {};
lu.biorhythmControls = lu.biorhythmControls || {};
lu.biorhythmControls.common = lu.biorhythmControls.common || {};
lu.biorhythmControls.common.painting = lu.biorhythmControls.common.painting || {};
lu.biorhythmControls.common.painting.GridLinesPainter = function() {
  var paintContext = null;
  var dataToPaint = null;
  this.paint = function(context, data) {
    paintContext = context;
    dataToPaint = data;
    var isGridVisible = dataToPaint && dataToPaint.lines && dataToPaint.lines.length > 0;
    if(!isGridVisible) {
      return
    }
    paintGrid()
  };
  function paintGrid() {
    paintContext.strokeStyle = dataToPaint.color;
    paintContext.lineWidth = 1;
    paintContext.lineJoin = "round";
    setLinePattern(null);
    for(var i = 0;i < dataToPaint.lines.length;i++) {
      paintLine(dataToPaint.lines[i])
    }
  }
  function paintLine(line) {
    paintContext.beginPath();
    paintContext.moveTo(line.getStartPoint().getX(), line.getStartPoint().getY());
    paintContext.lineTo(line.getEndPoint().getX(), line.getEndPoint().getY());
    paintContext.stroke()
  }
  function setLinePattern(linePattern) {
    if(paintContext.mozDash !== undefined) {
      paintContext.mozDash = linePattern
    }
    if(typeof paintContext.setLineDash === "function") {
      paintContext.setLineDash(linePattern)
    }
  }
};
var lu = lu || {};
lu.biorhythmControls = lu.biorhythmControls || {};
lu.biorhythmControls.common = lu.biorhythmControls.common || {};
lu.biorhythmControls.common.painting = lu.biorhythmControls.common.painting || {};
lu.biorhythmControls.common.painting.TodayPainter = function() {
  var paintContext = null;
  var dataToPaint = null;
  this.paint = function(context, data) {
    paintContext = context;
    dataToPaint = data;
    if(!dataToPaint) {
      return
    }
    paintTodayRectangle()
  };
  function paintTodayRectangle() {
    var rect = dataToPaint.rectangle;
    paintContext.beginPath();
    paintContext.rect(rect.getLeft(), rect.getTop(), rect.getWidth(), rect.getHeight());
    paintContext.fillStyle = dataToPaint.color;
    paintContext.fill()
  }
};
var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};
lu.bioControls.core.biorhythms.EmotionalBiorhythm = function() {
  var biorhythm;
  function getName() {
    return"Emotional"
  }
  function getPeriodLength() {
    return biorhythm.getPeriodLength()
  }
  function getValue(dayIndex) {
    return biorhythm.getValue(dayIndex)
  }
  (function initialize() {
    biorhythm = new lu.bioControls.core.biorhythms.SinusoidalBiorhythm;
    biorhythm.setPeriodLength(28)
  })();
  this.getName = getName;
  this.getPeriodLength = getPeriodLength;
  this.getValue = getValue
};
var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};
lu.bioControls.core.biorhythms.EstheticBiorhythm = function() {
  var biorhythm;
  function getName() {
    return"Esthetic"
  }
  function getPeriodLength() {
    return biorhythm.getPeriodLength()
  }
  function getValue(dayIndex) {
    return biorhythm.getValue(dayIndex)
  }
  (function initialize() {
    biorhythm = new lu.bioControls.core.biorhythms.SinusoidalBiorhythm;
    biorhythm.setPeriodLength(43)
  })();
  this.getName = getName;
  this.getPeriodLength = getPeriodLength;
  this.getValue = getValue
};
var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};
lu.bioControls.core.biorhythms.IntellectualBiorhythm = function() {
  var biorhythm;
  function getName() {
    return"Intellectual"
  }
  function getPeriodLength() {
    return biorhythm.getPeriodLength()
  }
  function getValue(dayIndex) {
    return biorhythm.getValue(dayIndex)
  }
  (function initialize() {
    biorhythm = new lu.bioControls.core.biorhythms.SinusoidalBiorhythm;
    biorhythm.setPeriodLength(33)
  })();
  this.getName = getName;
  this.getPeriodLength = getPeriodLength;
  this.getValue = getValue
};
var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};
lu.bioControls.core.biorhythms.IntuitiveBiorhythm = function() {
  var biorhythm;
  function getName() {
    return"Intuitive"
  }
  function getPeriodLength() {
    return biorhythm.getPeriodLength()
  }
  function getValue(dayIndex) {
    return biorhythm.getValue(dayIndex)
  }
  (function initialize() {
    biorhythm = new lu.bioControls.core.biorhythms.SinusoidalBiorhythm;
    biorhythm.setPeriodLength(38)
  })();
  this.getName = getName;
  this.getPeriodLength = getPeriodLength;
  this.getValue = getValue
};
var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};
lu.bioControls.core.biorhythms.MasteryBiorhythm = function() {
  var biorhythm;
  function getName() {
    return"Mastery"
  }
  function getValue(dayIndex) {
    return biorhythm.getValue(dayIndex)
  }
  (function initialize() {
    var physicalBiorhythm = new lu.bioControls.core.biorhythms.PhysicalBiorhythm;
    var intellectualBiorhythm = new lu.bioControls.core.biorhythms.IntellectualBiorhythm;
    biorhythm = new lu.bioControls.core.biorhythms.AverageBiorhythm(physicalBiorhythm, intellectualBiorhythm)
  })();
  this.getName = getName;
  this.getValue = getValue
};
var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};
lu.bioControls.core.biorhythms.PassionBiorhythm = function() {
  var biorhythm;
  this.getName = function getName() {
    return"Passion"
  };
  this.getValue = function getValue(dayIndex) {
    return biorhythm.getValue(dayIndex)
  };
  (function initialize() {
    var physicalBiorhythm = new lu.bioControls.core.biorhythms.PhysicalBiorhythm;
    var emotionalBiorhythm = new lu.bioControls.core.biorhythms.EmotionalBiorhythm;
    biorhythm = new lu.bioControls.core.biorhythms.AverageBiorhythm(physicalBiorhythm, emotionalBiorhythm)
  })()
};
var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};
lu.bioControls.core.biorhythms.PerceptionBiorhythm = function() {
  var biorhythm;
  function getName() {
    return"Perception"
  }
  function getValue(dayIndex) {
    return biorhythm.getValue(dayIndex)
  }
  (function initialize() {
    var physicalBiorhythm = new lu.bioControls.core.biorhythms.PhysicalBiorhythm;
    var intuitiveBiorhythm = new lu.bioControls.core.biorhythms.IntuitiveBiorhythm;
    biorhythm = new lu.bioControls.core.biorhythms.AverageBiorhythm(physicalBiorhythm, intuitiveBiorhythm)
  })();
  this.getName = getName;
  this.getValue = getValue
};
var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};
lu.bioControls.core.biorhythms.PhysicalBiorhythm = function() {
  var biorhythm;
  function getName() {
    return"Physical"
  }
  function getPeriodLength() {
    return biorhythm.getPeriodLength()
  }
  function getValue(dayIndex) {
    return biorhythm.getValue(dayIndex)
  }
  (function initialize() {
    biorhythm = new lu.bioControls.core.biorhythms.SinusoidalBiorhythm;
    biorhythm.setPeriodLength(23)
  })();
  this.getName = getName;
  this.getPeriodLength = getPeriodLength;
  this.getValue = getValue
};
var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};
lu.bioControls.core.biorhythms.PsychicBiorhythm = function() {
  var biorhythm;
  function getName() {
    return"Psychic"
  }
  function getValue(dayIndex) {
    return biorhythm.getValue(dayIndex)
  }
  (function initialize() {
    var emotionalBiorhythm = new lu.bioControls.core.biorhythms.EmotionalBiorhythm;
    var intuitiveBiorhythm = new lu.bioControls.core.biorhythms.IntuitiveBiorhythm;
    biorhythm = new lu.bioControls.core.biorhythms.AverageBiorhythm(emotionalBiorhythm, intuitiveBiorhythm)
  })();
  this.getName = getName;
  this.getValue = getValue
};
var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};
lu.bioControls.core.biorhythms.SelfAwarenessBiorhythm = function() {
  var biorhythm;
  function getName() {
    return"Self Awareness"
  }
  function getPeriodLength() {
    return biorhythm.getPeriodLength()
  }
  function getValue(dayIndex) {
    return biorhythm.getValue(dayIndex)
  }
  (function initialize() {
    biorhythm = new lu.bioControls.core.biorhythms.SinusoidalBiorhythm;
    biorhythm.setPeriodLength(48)
  })();
  this.getName = getName;
  this.getPeriodLength = getPeriodLength;
  this.getValue = getValue
};
var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};
lu.bioControls.core.biorhythms.SinusoidalBiorhythm = function() {
  var values = [];
  var periodLength = 0;
  function getPeriodLength() {
    return periodLength
  }
  function setPeriodLength(value) {
    periodLength = value;
    generateValues()
  }
  function getValue(dayIndex) {
    var index = dayIndex % periodLength;
    if(index < 0) {
      index += periodLength
    }
    return values[index]
  }
  function generateValues() {
    values = [];
    for(var i = 0;i < periodLength;i++) {
      values[i] = Math.sin(i * 2 * Math.PI / periodLength)
    }
  }
  this.getPeriodLength = getPeriodLength;
  this.setPeriodLength = setPeriodLength;
  this.getValue = getValue
};
var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};
lu.bioControls.core.biorhythms.SpiritualBiorhythm = function() {
  var biorhythm;
  function getName() {
    return"Spiritual"
  }
  function getPeriodLength() {
    return biorhythm.getPeriodLength()
  }
  function getValue(dayIndex) {
    return biorhythm.getValue(dayIndex)
  }
  (function initialize() {
    biorhythm = new lu.bioControls.core.biorhythms.SinusoidalBiorhythm;
    biorhythm.setPeriodLength(53)
  })();
  this.getName = getName;
  this.getPeriodLength = getPeriodLength;
  this.getValue = getValue
};
var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};
lu.bioControls.core.biorhythms.SuccessBiorhythm = function() {
  var biorhythm;
  function getName() {
    return"Success"
  }
  function getValue(dayIndex) {
    return biorhythm.getValue(dayIndex)
  }
  (function initialize() {
    var intellectualBiorhythm = new lu.bioControls.core.biorhythms.IntellectualBiorhythm;
    var intuitiveBiorhythm = new lu.bioControls.core.biorhythms.IntuitiveBiorhythm;
    biorhythm = new lu.bioControls.core.biorhythms.AverageBiorhythm(intellectualBiorhythm, intuitiveBiorhythm)
  })();
  this.getName = getName;
  this.getValue = getValue
};
var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};
lu.bioControls.core.biorhythms.WisdomBiorhythm = function() {
  var biorhythm;
  function getName() {
    return"Wisdom"
  }
  function getValue(dayIndex) {
    return biorhythm.getValue(dayIndex)
  }
  (function initialize() {
    var emotionalBiorhythm = new lu.bioControls.core.biorhythms.EmotionalBiorhythm;
    var intellectualBiorhythm = new lu.bioControls.core.biorhythms.IntellectualBiorhythm;
    biorhythm = new lu.bioControls.core.biorhythms.AverageBiorhythm(emotionalBiorhythm, intellectualBiorhythm)
  })();
  this.getName = getName;
  this.getValue = getValue
};
