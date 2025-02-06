export function initializeAditorPoint(inputSection, defaultValue) {
  inputSection.innerHTML = ` 
  <div class="aditor">
     <div class="line">
       <div class="Head">
       <label class="pointLabel">
       <input type="checkbox" /><span class="points"><i class="fa-solid fa-circle"></i></span
     ></label>
     <div class="content">
       <ul class="inputContent" contenteditable="true"></ul>
     </div>
       <div class="actionsOff">
           <button class="expand">
             <i class="fa-solid fa-caret-down"></i>
           </button>
       </div>
     </div>
     <div class="sub-line-off">
       <div class="sub-Head">
         <label class="pointLabel">
           <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
         <div class="sub-content">
           <ul class="inputSubContent" contenteditable="true"></ul>
         </div>
       </div>
     </div></div>
   </div>
   <div class="options" id="dropdownMenu">
     <div class="icon textBtn active" tabindex="0">
       <span><i class="fa-solid fa-paragraph"></i></span>
     </div>
     <div class="icon pointBtn" tabindex="0">
       <span><i class="fa-solid fa-list"></i></span>
     </div>
     <div class="icon indentBtn" tabindex="0">
       <span><i class="fa-solid fa-indent"></i></span>
     </div>
   </div>`;

  const textBtn = inputSection.querySelector(".textBtn");

  const pointBtn = inputSection.querySelector(".pointBtn");

  const indentBtn = inputSection.querySelector(".indentBtn");

  let current_Label = "pointLabel";

  let current_EditableText = "";

  let subLineActive = false;
  let subAditorActive = false;

  let current_Editable = null;
  let current_subEditable = null;

  if (current_Editable == null) {
    current_Editable = inputSection.querySelector(".inputContent");
  }

  let current_Line = null;
  let next_Line = null;
  let previous_Line = null;

  let current_subLine = null;
  let previous_subLine = null;

  let current_subHead = null;
  let next_subHead = null;
  let previous_subHead = null;

  const aditor = inputSection.querySelector(".aditor");

  const label = aditor.querySelector(".points");

  LabelColor(0);

  let oneTime = false;

  current_Editable.textContent = "Add details";

  function LabelColor(value) {
    label.style.opacity = value;
  }

  if (defaultValue != "") {
    aditor.innerHTML = defaultValue;
    oneTime = true;
  }

  function updateElement() {
    current_Line = current_Editable.closest(".line");
    next_Line = current_Line.nextElementSibling;
    previous_Line = current_Line.previousElementSibling;

    while (next_Line && next_Line.classList.contains("collapsed")) {
      next_Line = next_Line.nextElementSibling;
    }

    while (previous_Line && previous_Line.classList.contains("collapsed")) {
      previous_Line = previous_Line.previousElementSibling;
    }

    current_subLine = current_Line.querySelector(".sub-line");

    if (current_subEditable != null) {
      current_subHead = current_subEditable.closest(".sub-Head");
      next_subHead = current_subHead.nextElementSibling;
      previous_subHead = current_subHead.previousElementSibling;
    }

    if (previous_Line != null) {
      previous_subLine = previous_Line.querySelector(".sub-line");
    }
  }

  let selection = false;

  function emptyAditor() {
    current_Label = "textLabel";

    subLineActive = false;
    subAditorActive = false;

    activeOption();

    aditor.innerHTML = `
<div class="line">
     <div class="Head">
       <label class="textLabel"></label>
         <div class="content">
           <ul class="inputContent" contenteditable="true"></ul>
         </div>
       <div class="actionsOff">
           <button class="expand">
             <i class="fa-solid fa-caret-down"></i>
           </button>
       </div>
     </div>
     <div class="sub-line-off">
       <div class="sub-Head">
         <label class="pointLabel">
           <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
         <div class="sub-content">
           <ul class="inputSubContent" contenteditable="true"></ul>
         </div>
       </div>
     </div>
   </div>
 </div>`;

    activeOption();

    selection = false;
    subAditorActive = false;
    current_Editable = aditor.querySelector(".inputContent");
    current_Editable.focus();
    window.getSelection().selectAllChildren(current_Editable);
    window.getSelection().collapseToEnd();
    updateElement();
  }

  let text = "";

  function updateSelectedText() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const selectedText = selection.toString();
      text = selectedText;
    }
  }

  aditor.addEventListener("keydown", (e) => {
    if (e.key == "/") {
      e.preventDefault();
      // options.classList.toggle("inactive");
      dropdownMenu.classList.toggle("active");
      currentFocus = currentLabelActive();
    }

    if (e.key == " ") {
      if (!subLineActive) {
        if (current_Editable.textContent.startsWith(">")) {
          e.preventDefault();
          current_Editable.innerHTML = current_Editable.innerHTML.substring(4);
          current_Label = "textLabel";
          elementFunc(current_Label);
        } else if (current_Editable.textContent.startsWith("-")) {
          e.preventDefault();
          current_Editable.innerHTML = current_Editable.innerHTML.substring(1);
          current_Label = "pointLabel";
          elementFunc(current_Label);
        }
      } else {
        if (current_subEditable.textContent.startsWith(">")) {
          e.preventDefault();
          current_subEditable.innerHTML =
            current_subEditable.innerHTML.substring(4);
          current_Label = "textLabel";
          elementFunc(current_Label);
        } else if (current_subEditable.textContent.startsWith("-")) {
          e.preventDefault();
          current_subEditable.innerHTML =
            current_subEditable.innerHTML.substring(1);
          current_Label = "pointLabel";
          elementFunc(current_Label);
        }
      }
    }

    if (e.ctrlKey && e.key == "z") {
      e.preventDefault();
    }
    if (e.shiftKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      // Using a timeout to ensure the selection update after the key press event is fully processed
      setTimeout(updateSelectedText, 0);
    }
    if (e.ctrlKey && e.key == "x") {
      e.preventDefault();
      if (!subLineActive) {
        current_Editable.innerHTML = current_Editable.textContent.replace(
          text,
          ""
        );
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else {
        current_subEditable.innerHTML = current_subEditable.textContent.replace(
          text,
          ""
        );
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      }
    }
    if (e.ctrlKey && e.key == "c") {
      e.preventDefault();
      if (!subLineActive) {
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else {
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      }
    }

    if (e.ctrlKey && e.key == "v") {
      e.preventDefault();
      if (!subLineActive) {
        current_Editable.innerHTML += text;
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else {
        current_subEditable.innerHTML += text;
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      }
    }

    if (e.ctrlKey && e.key == "a") {
      e.preventDefault();
      selection = true;
      let range = document.createRange();
      range.selectNodeContents(aditor);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }

    if (e.key == "Tab") {
      if (e.shiftKey) {
        e.preventDefault();
        // if (current_Label == "headingLabel") {
        headingCollapse_All();
        // }
      } else {
        e.preventDefault();
        if (current_Label == "headingLabel") {
          const line = current_Editable.closest(".line");
          headingActionBtn(line, "switch");
          headingCollapse(line);
        } else {
          indentFunc();
        }
      }
    }

    if (e.key == "Enter") {
      e.preventDefault();

      updateElement();
      dropdownMenu.classList.remove("active");

      if (!subLineActive && current_Editable.textContent.trim() == "") {
        current_Label = "textLabel";
        updateLine(current_Label, "", current_Line);
        current_Editable = current_Line.querySelector(".inputContent");
        current_Editable.focus();
      } else if (!subLineActive && current_Editable.textContent.trim() != "") {
        if (
          current_Label == "headingLabel" &&
          current_Line.querySelector(".actionsOff")
        ) {
          current_Label = "textLabel";
          addDiv();
          headingScan();
        } else {
          addDiv();
        }
      } else if (
        subLineActive &&
        current_subEditable.textContent.trim() == ""
      ) {
        indentFunc();
      } else if (
        subLineActive &&
        current_subEditable.textContent.trim() != ""
      ) {
        addDiv();
      }
    }

    if (e.key == "Backspace") {
      // Check if the ul is empty
      if (selection) {
        emptyAditor();
      }
      if (!subLineActive) {
        if (current_Editable.textContent.trim() == "") {
          updateElement();

          if (previous_Line) {
            // Delete the current sub
            current_Line.remove();

            // Focus on the ul of the previous sub
            current_Editable = previous_Line.querySelector(".inputContent");

            const label = current_Editable
              .closest(".line")
              .querySelector("label");

            current_Label = label.className;

            if (current_Label == "headingLabel") {
              // headingActionBtn(previous_Line, "off");
              headingScan();
            }

            activeOption();

            if (current_Editable) {
              e.preventDefault();

              current_Editable.focus();
              window.getSelection().selectAllChildren(current_Editable);
              window.getSelection().collapseToEnd();
            }
          } else if (next_Line) {
            // Delete the current sub
            current_Line.remove();

            // Focus on the ul of the previous sub
            current_Editable = next_Line.querySelector(".inputContent");
            const label = current_Editable
              .closest(".line")
              .querySelector("label");

            current_Label = label.className;

            if (current_Label == "headingLabel") {
              // headingActionBtn(previous_Line, "off");
            }

            activeOption();

            if (current_Editable) {
              e.preventDefault();

              current_Editable.focus();
              window.getSelection().selectAllChildren(current_Editable);
              window.getSelection().collapseToEnd();
            }
          } else {
            emptyAditor();
          }
        }
      } else {
        if (current_subEditable.textContent.trim() == "") {
          updateElement();

          current_subHead = current_subEditable.closest(".sub-Head");
          next_subHead = current_subHead.nextElementSibling;
          previous_subHead = current_subHead.previousElementSibling;

          if (previous_subHead) {
            // Delete the current sub
            current_subHead.remove();

            // Focus on the ul of the previous sub
            current_subEditable =
              previous_subHead.querySelector(".inputSubContent");

            const label = previous_subHead.querySelector("label");

            current_Label = label.className;

            if (current_Label == "checkboxLabel") {
              const parent = previous_subHead.closest(".line");
              updateParentCheckbox(parent);
              //check it later how did i change the parent when new subhead added in previos aditor
            }

            activeOption();

            if (current_subEditable) {
              e.preventDefault();

              current_subEditable.focus();
              window.getSelection().selectAllChildren(current_subEditable);
              window.getSelection().collapseToEnd();
            }
          } else if (next_subHead) {
            // Delete the current sub
            current_subHead.remove();

            // Focus on the ul of the next sub
            current_subEditable =
              next_subHead.querySelector(".inputSubContent");

            const label = next_subHead.querySelector("label");

            current_Label = label.className;

            if (current_Label == "checkboxLabel") {
              const parent = next_subHead.closest(".line");
              updateParentCheckbox(parent);
              //check it later how did i change the parent when new subhead added in previos aditor
            }

            activeOption();

            if (current_subEditable) {
              e.preventDefault();

              current_subEditable.focus();
              window.getSelection().selectAllChildren(current_subEditable);
              window.getSelection().collapseToEnd();
            }
          } else {
            e.preventDefault();
            subLineActive = false;

            const actionBtn = current_Line.querySelector(".actions");
            actionBtn.classList.replace("actions", "actionsOff");

            current_subLine.classList.replace("sub-line", "sub-line-off");

            current_Editable = current_subEditable
              .closest(".line")
              .querySelector(".inputContent");

            const label = current_Editable
              .closest(".line")
              .querySelector("label");

            current_Label = label.className;
            activeOption();

            current_Editable.focus();
            window.getSelection().selectAllChildren(current_Editable);
            window.getSelection().collapseToEnd();
          }
        }
      }
    }

    if (
      (e.key == "ArrowUp" || e.key == "ArrowDown") &&
      !dropdownMenu.classList.contains("active")
    ) {
      e.preventDefault();
      updateElement();

      navigator(e.key);
    }
    if (e.key == "ArrowLeft" && !dropdownMenu.classList.contains("active")) {
      const range = window.getSelection().getRangeAt(0);
      const tempRange = document.createRange();
      if (!subLineActive) {
        tempRange.selectNodeContents(current_Editable);
        tempRange.setEnd(range.startContainer, range.startOffset);
        const cursorPosition = tempRange.toString().length;

        if (cursorPosition == 0) {
          e.preventDefault();
          updateElement();
          navigator(e.key);
        }
      } else {
        tempRange.selectNodeContents(current_subEditable);
        tempRange.setEnd(range.startContainer, range.startOffset);
        const cursorPosition = tempRange.toString().length;

        if (cursorPosition == 0) {
          e.preventDefault();
          updateElement();
          navigator(e.key);
        }
      }
    }
    if (e.key == "ArrowRight" && !dropdownMenu.classList.contains("active")) {
      const range = window.getSelection().getRangeAt(0);
      const tempRange = document.createRange();
      if (!subLineActive) {
        tempRange.selectNodeContents(current_Editable);
        tempRange.setEnd(range.startContainer, range.startOffset);
        const cursorPosition = tempRange.toString().length;
        const currentEditableLength = current_Editable.textContent.length;

        if (cursorPosition == currentEditableLength) {
          e.preventDefault();
          updateElement();
          navigator(e.key);
        }
      } else {
        tempRange.selectNodeContents(current_subEditable);
        tempRange.setEnd(range.startContainer, range.startOffset);
        const cursorPosition = tempRange.toString().length;
        const currentEditableLength = current_subEditable.textContent.length;

        if (cursorPosition == currentEditableLength) {
          e.preventDefault();
          updateElement();
          navigator(e.key);
        }
      }
    }
  });

  aditor.addEventListener("click", (e) => {
    if (
      e.target.parentElement.className == "expand" ||
      e.target.parentElement.className == "collapse"
    ) {
      const label = e.target.parentElement
        .closest(".line")
        .querySelector("label").className;

      if (label == "headingLabel") {
        const line = e.target.parentElement.closest(".line");
        headingActionBtn(line, "switch");
        headingCollapse(line);
      } else {
        let expandBtn = e.target.parentElement;
        let expand = e.target.parentElement
          .closest(".line")
          .querySelector(".sub-line");
        if (expand != null) {
          expand.classList.replace("sub-line", "sub-line-off");
          expandBtn.classList.replace("expand", "collapse");
          expandBtn.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;
        } else {
          expand = expandBtn.closest(".line").querySelector(".sub-line-off");
          expand.classList.replace("sub-line-off", "sub-line");
          expandBtn.classList.replace("collapse", "expand");
          expandBtn.innerHTML = ` <i class="fa-solid fa-caret-down"></i>`;
        }
      }
    } else if (e.target.parentElement.className == "actions") {
      const label = e.target.closest(".line").querySelector("label").className;

      if (label == "headingLabel") {
        const line = e.target.closest(".line");
        headingActionBtn(line, "switch");
        headingCollapse(line);
      } else {
        let expandBtn = e.target;
        let expand = e.target.closest(".line").querySelector(".sub-line");
        if (expand != null) {
          expand.classList.replace("sub-line", "sub-line-off");
          expandBtn.classList.replace("expand", "collapse");
          expandBtn.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;
        } else {
          expand = expandBtn.closest(".line").querySelector(".sub-line-off");
          expand.classList.replace("sub-line-off", "sub-line");
          expandBtn.classList.replace("collapse", "expand");
          expandBtn.innerHTML = ` <i class="fa-solid fa-caret-down"></i>`;
        }
      }
    } else if (e.target.classList == "inputContent") {
      if (!oneTime) {
        current_Editable = e.target;
        updateElement();
        current_Editable.textContent = "";
        LabelColor(1);
        oneTime = true;
        // activeOption();
      }
      subLineActive = false;
      current_Editable = e.target;
      updateElement();
      const label = current_Line.querySelector("label");
      current_Label = label.className;
      activeOption();
    } else if (e.target.classList == "inputSubContent") {
      subLineActive = true;
      current_subEditable = e.target;
      current_Editable = current_subEditable
        .closest(".sub-Head")
        .closest(".line")
        .querySelector(".inputContent");
      updateElement();
      const label = current_subHead.querySelector("label");
      current_Label = label.className;
      activeOption();
    } else if (e.target.type == "checkbox") {
      let checkbox = e.target.nextElementSibling;

      // checkbox.classList.toggle("done");
      checkbox.classList == "unchecked"
        ? checkbox.classList.replace("unchecked", "checked")
        : checkbox.classList.replace("checked", "unchecked");

      const parent = e.target.closest(".line");

      if (!checkbox.closest(".Head")) {
        updateParentCheckbox(parent);
      } else {
        updateNestedCheckbox(parent);
      }
    } else {
      if (e.target.className == "sub-line") {
        current_subLine = e.target.closest(".sub-line");
        current_subHead = e.target.closest(".sub-Head");
        updateElement();
        const label = current_subHead.querySelector("label");
        current_Label = label.className;
        current_subEditable = current_subHead.querySelector(".inputSubContent");
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      } else {
        current_Line = e.target.closest(".line");
        updateElement();
        const label = current_Line.querySelector("label");
        current_Label = label.className;
        current_Editable = current_Line.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      }
    }
  });

  function backward() {
    if (!subLineActive) {
      if (previous_Line != null && previous_subLine == null) {
        const label = previous_Line.querySelector("label");
        current_Label = label.className;

        current_Editable = previous_Line.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
      } else if (previous_Line != null && previous_subLine != null) {
        subLineActive = true;

        const current_subLine_lastHead = previous_subLine.lastElementChild;
        const label = current_subLine_lastHead.querySelector("label");
        current_Label = label.className;

        current_subEditable =
          current_subLine_lastHead.querySelector(".inputSubContent");

        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
      }
    } else {
      current_subHead = current_subEditable.closest(".sub-Head");
      previous_subHead = current_subHead.previousElementSibling;

      if (previous_subHead != null) {
        const label = previous_subHead.querySelector("label");
        current_Label = label.className;

        current_subEditable =
          previous_subHead.querySelector(".inputSubContent");
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
      } else if (previous_subHead == null) {
        subLineActive = false;
        const label = current_subHead.closest(".line").querySelector("label");
        current_Label = label.className;
        current_Editable = current_subHead
          .closest(".line")
          .querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
      }
    }

    window.getSelection().collapseToEnd();
  }

  function forward(key) {
    if (!subLineActive) {
      if (next_Line != null && current_subLine == null) {
        const label = next_Line.querySelector("label");
        current_Label = label.className;

        current_Editable = next_Line.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
      } else if (current_subLine != null) {
        subLineActive = true;

        const current_subLine_firstHead = current_subLine.firstElementChild;
        const label = current_subLine_firstHead.querySelector("label");
        current_Label = label.className;

        current_subEditable =
          current_subLine_firstHead.querySelector(".inputSubContent");

        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
      }
    } else {
      current_Line = current_subEditable.closest(".line");
      next_Line = current_Line.nextElementSibling;

      current_subHead = current_subEditable.closest(".sub-Head");
      next_subHead = current_subHead.nextElementSibling;

      if (next_subHead != null) {
        const label = next_subHead.querySelector("label");
        current_Label = label.className;

        current_subEditable = next_subHead.querySelector(".inputSubContent");
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
      } else if (next_subHead == null && next_Line != null) {
        subLineActive = false;
        const label = next_Line.closest(".line").querySelector("label");
        current_Label = label.className;
        current_Editable = next_Line
          .closest(".line")
          .querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
      }
    }
    if (key == "ArrowRight") {
      window.getSelection().collapseToStart();
    } else {
      window.getSelection().collapseToEnd();
    }
  }

  function navigator(key) {
    updateElement();
    if (key == "ArrowUp") {
      backward();
    } else if (key == "ArrowDown") {
      forward();
    } else if (key == "ArrowLeft") {
      backward();
    } else if (key == "ArrowRight") {
      forward("ArrowRight");
    }
    updateElement();
    activeOption();
  }

  function updateLabel(label, current_EditableText) {
    if (label == "textLabel") {
      return `<label class="textLabel"></label>
     <div class="content">
       <ul class="inputContent" contenteditable="true">${current_EditableText}</ul>
     </div>`;
    } else if (label == "pointLabel") {
      return `<label class="pointLabel">
       <input type="checkbox" /><span class="points"><i class="fa-solid fa-circle"></i></span
     ></label>
     <div class="content">
       <ul class="inputContent" contenteditable="true">${current_EditableText}</ul>
     </div>`;
    }
  }

  function updateLine(label, current_EditableText, Div) {
    let newLabel = updateLabel(label, current_EditableText);

    if (label == "headingLabel") {
      Div.innerHTML = `<div class="Head">
${newLabel}
<div class="actionsOff">
 <button class="expand">
   <i class="fa-solid fa-caret-down"></i>
 </button>
</div>
</div>
`;
    } else if (label == "checkboxLabel") {
      Div.innerHTML = `<div class="Head">
   ${newLabel}
   <div class="actionsOff">
       <button class="expand">
         <i class="fa-solid fa-caret-down"></i>
       </button>
   </div>
 </div>
 <div class="sub-line-off">
   <div class="sub-Head">
     <label class="checkboxLabel">
       <input type="checkbox"/><span class="unchecked"></span
     ></label>
     <div class="sub-content">
       <ul class="inputSubContent" contenteditable="true"></ul>
     </div>
   </div>
 </div>`;
    } else {
      Div.innerHTML = `<div class="Head">
   ${newLabel}
   <div class="actionsOff">
       <button class="expand">
         <i class="fa-solid fa-caret-down"></i>
       </button>
   </div>
 </div>
 <div class="sub-line-off">
   <div class="sub-Head">
     <label class="pointLabel">
       <input type="checkbox" /><span class="points"><i class="fa-solid fa-square"></i></span
     ></label>
     <div class="sub-content">
       <ul class="inputSubContent" contenteditable="true"></ul>
     </div>
   </div>
 </div>`;
    }
  }

  function updateHead(label, current_EditableText, current_subContent, Div) {
    let newLabel = updateLabel(label, current_EditableText);

    Div.innerHTML = `<div class="Head">
  ${newLabel}
  <div class="actions">
      <button class="expand">
        <i class="fa-solid fa-caret-down"></i>
      </button>
  </div>
 </div>
${current_subContent}`;
  }

  function updateSubLine(label, current_EditableText, Div) {
    if (label == "textLabel") {
      Div.innerHTML = `
<label class="textLabel"></label>
<div class="sub-content">
 <ul class="inputSubContent" contenteditable="true">${current_EditableText}</ul>
</div>`;
    } else if (label == "pointLabel") {
      Div.innerHTML = `
<label class="pointLabel">
<input type="checkbox" /><span class="points"><i class="fa-solid fa-square"></i></i></span
></label>
<div class="sub-content">
<ul class="inputSubContent" contenteditable="true">${current_EditableText}</ul>
</div>`;
    }
  }

  function addDiv() {
    updateElement();
    activeOption();

    if (!subLineActive) {
      const range = window.getSelection().getRangeAt(0);
      const tempRange = document.createRange();
      tempRange.selectNodeContents(current_Editable);
      tempRange.setEnd(range.startContainer, range.startOffset);

      const cursorPosition = tempRange.toString().length;

      // Create new line when sub line is off
      const Div = document.createElement("div");
      Div.classList.add("line");

      updateLine(current_Label, "", Div);

      if (cursorPosition == "0") {
        aditor.insertBefore(Div, current_Line);
        current_Editable = Div.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else if (next_Line != null) {
        aditor.insertBefore(Div, next_Line);
        current_Editable = Div.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else {
        aditor.appendChild(Div);
        current_Editable = Div.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      }
    } else {
      // updateElement();

      if (!subAditorActive && current_subEditable.textContent.trim() != "") {
        const range = window.getSelection().getRangeAt(0);
        const tempRange = document.createRange();
        tempRange.selectNodeContents(current_subEditable);
        tempRange.setEnd(range.startContainer, range.startOffset);

        const cursorPosition = tempRange.toString().length;

        // create new sub head in the sub line
        const Div = document.createElement("div");
        Div.classList.add("sub-Head");

        current_subHead = current_subEditable.closest(".sub-Head");
        current_subLine = current_subHead.closest(".sub-line");

        updateSubLine(current_Label, "", Div);

        if (cursorPosition == "0") {
          current_subLine.insertBefore(Div, current_subHead);
          current_subEditable = Div.querySelector(".inputSubContent");
          current_subEditable.focus();
          window.getSelection().selectAllChildren(current_subEditable);
          window.getSelection().collapseToEnd();
        } else if (next_subHead != null) {
          current_subLine = next_subHead.closest(".sub-line");
          current_subLine.insertBefore(Div, next_subHead);
          current_subEditable = Div.querySelector(".inputSubContent");
          current_subEditable.focus();
          window.getSelection().selectAllChildren(current_subEditable);
          window.getSelection().collapseToEnd();
        } else {
          current_subLine = current_subHead.closest(".sub-line");
          current_subLine.appendChild(Div);
          current_subEditable = Div.querySelector(".inputSubContent");
          current_subEditable.focus();
          window.getSelection().selectAllChildren(current_subEditable);
          window.getSelection().collapseToEnd();
        }
      } else if (current_subEditable.textContent.trim() != "") {
        // change the sub line
        updateSubLine(current_Label, current_EditableText, current_subHead);
        subAditorActive = false;
        current_subEditable = current_subHead.querySelector(".inputSubContent");
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      }

      if (current_Line.querySelector("label").className == "checkboxLabel") {
        const parent = current_subHead.closest(".line");
        updateParentCheckbox(parent);
        //check it later how did i change the parent when new subhead added in previos aditor
      }
    }
  }

  function elementFunc(current_Label) {
    activeOption();
    updateElement();

    if (!subLineActive) {
      current_EditableText = current_Editable.textContent;

      let current_subContent = current_Editable
        .closest(".line")
        .querySelector(".sub-line");

      if (current_subContent == null) {
        updateLine(current_Label, current_EditableText, current_Line);
      } else {
        current_subContent = current_subContent.outerHTML;

        updateHead(
          current_Label,
          current_EditableText,
          current_subContent,
          current_Line
        );
      }

      current_Editable = current_Line.querySelector(".inputContent");
      current_Editable.focus();
      window.getSelection().selectAllChildren(current_Editable);
      window.getSelection().collapseToEnd();
    } else {
      subAditorActive = true;

      current_EditableText = current_subEditable.textContent;

      addDiv();
    }
  }

  function indentFunc() {
    updateElement();

    const HeadContent = current_Line.querySelector(".inputContent").textContent;

    current_subLine = current_Line.querySelector(".sub-line-off");
    if (HeadContent == "") {
      current_Editable.focus();
    } else if (subLineActive) {
      subLineActive = false;

      const label = current_Line.querySelector(".Head").querySelector("label");
      current_Label = label.className;

      if (current_Label == "headingLabel") {
        current_Label = "textLabel";
      }

      current_Editable = current_subEditable
        .closest(".sub-Head")
        .closest(".line")
        .querySelector(".inputContent");

      addDiv();
    } else if (current_subLine != null && HeadContent != "") {
      const current_subLine_Amount =
        current_subLine.querySelectorAll(".sub-Head").length;
      const actionBtn = current_Line.querySelector(".actionsOff");

      if (current_subLine_Amount == 1 && actionBtn != null) {
        subLineActive = true;

        current_subLine.classList.replace("sub-line-off", "sub-line");

        actionBtn.classList.replace("actionsOff", "actions");
        // current_subHead = current_subLine.querySelector(".sub-Head");
        current_subEditable = current_subLine.querySelector(".inputSubContent");

        const label = current_subEditable
          .closest(".sub-Head")
          .querySelector("label");
        current_Label = label.className;

        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      } else {
        subLineActive = false;

        // let expand = current_Line.querySelector(".sub-line");
        const expandBtn = current_Line.querySelector(".collapse");
        current_subLine = current_Line.querySelector(".sub-line-off");

        current_subLine.classList.replace("sub-line-off", "sub-line");
        expandBtn.classList.replace("collapse", "expand");
        expandBtn.innerHTML = ` <i class="fa-solid fa-caret-down"></i>`;

        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      }
    } else if (
      current_subLine == null &&
      current_subEditable.textContent != ""
    ) {
      subLineActive = false;

      const expandBtn = current_Line.querySelector(".expand");
      current_subLine = current_Line.querySelector(".sub-line");

      current_subLine.classList.replace("sub-line", "sub-line-off");
      expandBtn.classList.replace("expand", "collapse");
      expandBtn.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;

      current_Editable.focus();
      window.getSelection().selectAllChildren(current_Editable);
      window.getSelection().collapseToEnd();
    }
    // current_Editable.focus();
    activeOption();
  }

  function activeOption() {
    const options = inputSection.querySelector(".options");
    const allActiveOptions = options.querySelectorAll("[class$=active]");
    allActiveOptions.forEach((item) => {
      item.classList.remove("active");
    });

    if (subLineActive) {
      indentBtn.classList.add("active");
    } else {
      indentBtn.classList.remove("active");
    }

    if (current_Label == "textLabel") {
      textBtn.classList.add("active");
    } else if (current_Label == "pointLabel") {
      pointBtn.classList.add("active");
    }
  }

  const dropdownMenu = inputSection.querySelector("#dropdownMenu");

  let currentFocus;

  function currentLabelActive() {
    if (current_Label == "textLabel") {
      return 0;
    } else if (current_Label == "pointLabel") {
      return 1;
    }
  }

  inputSection.addEventListener("keydown", (e) => {
    if (dropdownMenu.classList.contains("active")) {
      const items = dropdownMenu.querySelectorAll(".icon");

      if (e.key === "ArrowRight") {
        e.preventDefault();
        currentFocus = (currentFocus + 1) % items.length;
        items[currentFocus].focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        currentFocus = (currentFocus - 1 + items.length) % items.length;
        items[currentFocus].focus();
      } else if (e.key === "Enter" && currentFocus !== -1) {
        e.preventDefault();
        items[currentFocus].click();
        dropdownMenu.classList.remove("active");
      }
    }
  });

  textBtn.addEventListener("click", (e) => {
    current_Label = "textLabel";
    elementFunc(current_Label);
  });

  pointBtn.addEventListener("click", (e) => {
    current_Label = "pointLabel";
    elementFunc(current_Label);
  });

  indentBtn.addEventListener("click", (e) => {
    indentFunc();
  });
  //   indentFunc();
  // });

  // return {
  //   activeOption,
  // };
}

export function initializeAditorCheckbox(inputSection, defaultValue) {
  inputSection.innerHTML = `
  <div class="aditor">
  <div class="line">
    <div class="Head">
      <label class="checkboxLabel">
        <input type="checkbox"><span class="unchecked" style="opacity: 0.25;"></span></label>
      <div class="content">
        <ul class="inputContent" contenteditable="true"></ul>
      </div>
      <div class="actionsOff">
        <button class="expand">
          <i class="fa-solid fa-caret-down"></i>
        </button>
      </div>
    </div>
    <div class="sub-line-off">
      <div class="sub-Head">
        <label class="checkboxLabel">
          <input type="checkbox"><span class="unchecked"></span></label>
        <div class="sub-content">
          <ul class="inputSubContent" contenteditable="true"></ul>
        </div>
      </div>
    </div>
  </div>
</div>`;

  let current_Label = "checkboxLabel";

  let current_EditableText = "";

  let subLineActive = false;
  let subAditorActive = false;

  let current_Editable = null;
  let current_subEditable = null;

  if (current_Editable == null) {
    current_Editable = inputSection.querySelector(".inputContent");
  }

  let current_Line = null;
  let next_Line = null;
  let previous_Line = null;

  let current_subLine = null;
  let previous_subLine = null;

  let current_subHead = null;
  let next_subHead = null;
  let previous_subHead = null;

  const aditor = inputSection.querySelector(".aditor");

  const label = aditor.querySelector(".unchecked");

  let oneTime = false;

  current_Editable.textContent = "Add a steps";

  function LabelColor(value) {
    label.style.opacity = value;
  }

  LabelColor(0);

  if (defaultValue != "") {
    aditor.innerHTML = defaultValue;
    oneTime = true;
  }

  function updateElement() {
    current_Line = current_Editable.closest(".line");
    next_Line = current_Line.nextElementSibling;
    previous_Line = current_Line.previousElementSibling;

    while (next_Line && next_Line.classList.contains("collapsed")) {
      next_Line = next_Line.nextElementSibling;
    }

    while (previous_Line && previous_Line.classList.contains("collapsed")) {
      previous_Line = previous_Line.previousElementSibling;
    }

    current_subLine = current_Line.querySelector(".sub-line");

    if (current_subEditable != null) {
      current_subHead = current_subEditable.closest(".sub-Head");
      next_subHead = current_subHead.nextElementSibling;
      previous_subHead = current_subHead.previousElementSibling;
    }

    if (previous_Line != null) {
      previous_subLine = previous_Line.querySelector(".sub-line");
    }
  }

  let selection = false;

  function emptyAditor() {
    current_Label = "checkboxLabel";

    subLineActive = false;
    subAditorActive = false;

    aditor.innerHTML = `
  <div class="line">
    <div class="Head">
      <label class="checkboxLabel">
        <input type="checkbox"><span class="unchecked" style="opacity: 0.25;"></span></label>
      <div class="content">
        <ul class="inputContent" contenteditable="true"></ul>
      </div>
      <div class="actionsOff">
        <button class="expand">
          <i class="fa-solid fa-caret-down"></i>
        </button>
      </div>
    </div>
    <div class="sub-line-off">
      <div class="sub-Head">
        <label class="checkboxLabel">
          <input type="checkbox"><span class="unchecked"></span></label>
        <div class="sub-content">
          <ul class="inputSubContent" contenteditable="true"></ul>
        </div>
      </div>
    </div>
  </div>
`;

    selection = false;
    subAditorActive = false;
    current_Editable = aditor.querySelector(".inputContent");
    current_Editable.focus();
    window.getSelection().selectAllChildren(current_Editable);
    window.getSelection().collapseToEnd();
    updateElement();
  }

  let text = "";

  function updateSelectedText() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const selectedText = selection.toString();
      text = selectedText;
    }
  }

  aditor.addEventListener("keydown", (e) => {
    if (e.key == "/") {
      e.preventDefault();
      // options.classList.toggle("inactive");
    }

    if (e.key == " ") {
      if (!subLineActive) {
        if (current_Editable.textContent.startsWith("*")) {
          e.preventDefault();
          current_Editable.innerHTML = current_Editable.innerHTML.substring(1);
          current_Label = "checkboxLabel";
          elementFunc(current_Label);
        }
      } else {
        if (current_subEditable.textContent.startsWith("*")) {
          e.preventDefault();
          current_subEditable.innerHTML =
            current_subEditable.innerHTML.substring(1);
          current_Label = "checkboxLabel";
          elementFunc(current_Label);
        }
      }
    }

    if (e.ctrlKey && e.key == "z") {
      e.preventDefault();
    }
    if (e.shiftKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      // Using a timeout to ensure the selection update after the key press event is fully processed
      setTimeout(updateSelectedText, 0);
    }
    if (e.ctrlKey && e.key == "x") {
      e.preventDefault();
      if (!subLineActive) {
        current_Editable.innerHTML = current_Editable.textContent.replace(
          text,
          ""
        );
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else {
        current_subEditable.innerHTML = current_subEditable.textContent.replace(
          text,
          ""
        );
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      }
    }
    if (e.ctrlKey && e.key == "c") {
      e.preventDefault();
      if (!subLineActive) {
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else {
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      }
    }

    if (e.ctrlKey && e.key == "v") {
      e.preventDefault();
      if (!subLineActive) {
        current_Editable.innerHTML += text;
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else {
        current_subEditable.innerHTML += text;
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      }
    }

    if (e.ctrlKey && e.key == "a") {
      e.preventDefault();
      selection = true;
      let range = document.createRange();
      range.selectNodeContents(aditor);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }

    if (e.key == "Tab") {
      e.preventDefault();
      indentFunc();
    }

    if (e.key == "Enter") {
      e.preventDefault();

      updateElement();

      if (!subLineActive && current_Editable.textContent.trim() == "") {
        current_Label = "checkboxLabel";
        updateLine(current_Label, "", current_Line);
        current_Editable = current_Line.querySelector(".inputContent");
        current_Editable.focus();
      } else if (!subLineActive && current_Editable.textContent.trim() != "") {
        addDiv();
      } else if (
        subLineActive &&
        current_subEditable.textContent.trim() == ""
      ) {
        indentFunc();
      } else if (
        subLineActive &&
        current_subEditable.textContent.trim() != ""
      ) {
        addDiv();
      }
    }

    if (e.key == "Backspace") {
      // Check if the ul is empty
      if (selection) {
        emptyAditor();
      }
      if (!subLineActive) {
        if (current_Editable.textContent.trim() == "") {
          updateElement();

          if (previous_Line) {
            // Delete the current sub
            current_Line.remove();

            // Focus on the ul of the previous sub
            current_Editable = previous_Line.querySelector(".inputContent");

            const label = current_Editable
              .closest(".line")
              .querySelector("label");

            current_Label = label.className;

            if (current_Editable) {
              e.preventDefault();

              current_Editable.focus();
              window.getSelection().selectAllChildren(current_Editable);
              window.getSelection().collapseToEnd();
            }
          } else if (next_Line) {
            // Delete the current sub
            current_Line.remove();

            // Focus on the ul of the previous sub
            current_Editable = next_Line.querySelector(".inputContent");
            const label = current_Editable
              .closest(".line")
              .querySelector("label");

            current_Label = label.className;

            if (current_Label == "headingLabel") {
              // headingActionBtn(previous_Line, "off");
            }

            if (current_Editable) {
              e.preventDefault();

              current_Editable.focus();
              window.getSelection().selectAllChildren(current_Editable);
              window.getSelection().collapseToEnd();
            }
          } else {
            emptyAditor();
          }
        }
      } else {
        if (current_subEditable.textContent.trim() == "") {
          updateElement();

          current_subHead = current_subEditable.closest(".sub-Head");
          next_subHead = current_subHead.nextElementSibling;
          previous_subHead = current_subHead.previousElementSibling;

          if (previous_subHead) {
            // Delete the current sub
            current_subHead.remove();

            // Focus on the ul of the previous sub
            current_subEditable =
              previous_subHead.querySelector(".inputSubContent");

            const label = previous_subHead.querySelector("label");

            current_Label = label.className;

            if (current_Label == "checkboxLabel") {
              const parent = previous_subHead.closest(".line");
              updateParentCheckbox(parent);
              //check it later how did i change the parent when new subhead added in previos aditor
            }

            if (current_subEditable) {
              e.preventDefault();

              current_subEditable.focus();
              window.getSelection().selectAllChildren(current_subEditable);
              window.getSelection().collapseToEnd();
            }
          } else if (next_subHead) {
            // Delete the current sub
            current_subHead.remove();

            // Focus on the ul of the next sub
            current_subEditable =
              next_subHead.querySelector(".inputSubContent");

            const label = next_subHead.querySelector("label");

            current_Label = label.className;

            if (current_Label == "checkboxLabel") {
              const parent = next_subHead.closest(".line");
              updateParentCheckbox(parent);
              //check it later how did i change the parent when new subhead added in previos aditor
            }

            if (current_subEditable) {
              e.preventDefault();

              current_subEditable.focus();
              window.getSelection().selectAllChildren(current_subEditable);
              window.getSelection().collapseToEnd();
            }
          } else {
            e.preventDefault();
            subLineActive = false;

            const actionBtn = current_Line.querySelector(".actions");
            actionBtn.classList.replace("actions", "actionsOff");

            current_subLine.classList.replace("sub-line", "sub-line-off");

            current_Editable = current_subEditable
              .closest(".line")
              .querySelector(".inputContent");

            const label = current_Editable
              .closest(".line")
              .querySelector("label");

            current_Label = label.className;

            current_Editable.focus();
            window.getSelection().selectAllChildren(current_Editable);
            window.getSelection().collapseToEnd();
          }
        }
      }
    }

    if (e.key == "ArrowUp" || e.key == "ArrowDown") {
      e.preventDefault();
      updateElement();

      navigator(e.key);
    }
    if (e.key == "ArrowLeft") {
      const range = window.getSelection().getRangeAt(0);
      const tempRange = document.createRange();
      if (!subLineActive) {
        tempRange.selectNodeContents(current_Editable);
        tempRange.setEnd(range.startContainer, range.startOffset);
        const cursorPosition = tempRange.toString().length;

        if (cursorPosition == 0) {
          e.preventDefault();
          updateElement();
          navigator(e.key);
        }
      } else {
        tempRange.selectNodeContents(current_subEditable);
        tempRange.setEnd(range.startContainer, range.startOffset);
        const cursorPosition = tempRange.toString().length;

        if (cursorPosition == 0) {
          e.preventDefault();
          updateElement();
          navigator(e.key);
        }
      }
    }
    if (e.key == "ArrowRight") {
      const range = window.getSelection().getRangeAt(0);
      const tempRange = document.createRange();
      if (!subLineActive) {
        tempRange.selectNodeContents(current_Editable);
        tempRange.setEnd(range.startContainer, range.startOffset);
        const cursorPosition = tempRange.toString().length;
        const currentEditableLength = current_Editable.textContent.length;

        if (cursorPosition == currentEditableLength) {
          e.preventDefault();
          updateElement();
          navigator(e.key);
        }
      } else {
        tempRange.selectNodeContents(current_subEditable);
        tempRange.setEnd(range.startContainer, range.startOffset);
        const cursorPosition = tempRange.toString().length;
        const currentEditableLength = current_subEditable.textContent.length;

        if (cursorPosition == currentEditableLength) {
          e.preventDefault();
          updateElement();
          navigator(e.key);
        }
      }
    }
  });

  aditor.addEventListener("click", (e) => {
    if (
      e.target.parentElement.className == "expand" ||
      e.target.parentElement.className == "collapse"
    ) {
      const label = e.target.parentElement
        .closest(".line")
        .querySelector("label").className;

      let expandBtn = e.target.parentElement;
      let expand = e.target.parentElement
        .closest(".line")
        .querySelector(".sub-line");
      if (expand != null) {
        expand.classList.replace("sub-line", "sub-line-off");
        expandBtn.classList.replace("expand", "collapse");
        expandBtn.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;
      } else {
        expand = expandBtn.closest(".line").querySelector(".sub-line-off");
        expand.classList.replace("sub-line-off", "sub-line");
        expandBtn.classList.replace("collapse", "expand");
        expandBtn.innerHTML = ` <i class="fa-solid fa-caret-down"></i>`;
      }
    } else if (e.target.parentElement.className == "actions") {
      const label = e.target.closest(".line").querySelector("label").className;

      let expandBtn = e.target;
      let expand = e.target.closest(".line").querySelector(".sub-line");
      if (expand != null) {
        expand.classList.replace("sub-line", "sub-line-off");
        expandBtn.classList.replace("expand", "collapse");
        expandBtn.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;
      } else {
        expand = expandBtn.closest(".line").querySelector(".sub-line-off");
        expand.classList.replace("sub-line-off", "sub-line");
        expandBtn.classList.replace("collapse", "expand");
        expandBtn.innerHTML = ` <i class="fa-solid fa-caret-down"></i>`;
      }
    } else if (e.target.classList == "inputContent") {
      if (!oneTime) {
        current_Editable = e.target;
        updateElement();
        current_Editable.textContent = "";
        LabelColor(1);
        oneTime = true;
        // activeOption();
      }

      subLineActive = false;
      current_Editable = e.target;
      updateElement();
      const label = current_Line.querySelector("label");
      current_Label = label.className;
    } else if (e.target.classList == "inputSubContent") {
      subLineActive = true;
      current_subEditable = e.target;
      current_Editable = current_subEditable
        .closest(".sub-Head")
        .closest(".line")
        .querySelector(".inputContent");
      updateElement();
      const label = current_subHead.querySelector("label");
      current_Label = label.className;
    } else if (e.target.type == "checkbox") {
      let checkbox = e.target.nextElementSibling;

      // checkbox.classList.toggle("done");
      checkbox.classList == "unchecked"
        ? checkbox.classList.replace("unchecked", "checked")
        : checkbox.classList.replace("checked", "unchecked");

      const parent = e.target.closest(".line");

      if (!checkbox.closest(".Head")) {
        updateParentCheckbox(parent);
      } else {
        updateNestedCheckbox(parent);
      }
    } else {
      if (e.target.className == "sub-line") {
        current_subLine = e.target.closest(".sub-line");
        current_subHead = e.target.closest(".sub-Head");
        updateElement();
        const label = current_subHead.querySelector("label");
        current_Label = label.className;
        current_subEditable = current_subHead.querySelector(".inputSubContent");
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      } else {
        current_Line = e.target.closest(".line");
        updateElement();
        const label = current_Line.querySelector("label");
        current_Label = label.className;
        current_Editable = current_Line.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      }
    }
  });

  function backward() {
    if (!subLineActive) {
      if (previous_Line != null && previous_subLine == null) {
        const label = previous_Line.querySelector("label");
        current_Label = label.className;

        current_Editable = previous_Line.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
      } else if (previous_Line != null && previous_subLine != null) {
        subLineActive = true;

        const current_subLine_lastHead = previous_subLine.lastElementChild;
        const label = current_subLine_lastHead.querySelector("label");
        current_Label = label.className;

        current_subEditable =
          current_subLine_lastHead.querySelector(".inputSubContent");

        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
      }
    } else {
      current_subHead = current_subEditable.closest(".sub-Head");
      previous_subHead = current_subHead.previousElementSibling;

      if (previous_subHead != null) {
        const label = previous_subHead.querySelector("label");
        current_Label = label.className;

        current_subEditable =
          previous_subHead.querySelector(".inputSubContent");
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
      } else if (previous_subHead == null) {
        subLineActive = false;
        const label = current_subHead.closest(".line").querySelector("label");
        current_Label = label.className;
        current_Editable = current_subHead
          .closest(".line")
          .querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
      }
    }

    window.getSelection().collapseToEnd();
  }

  function forward(key) {
    if (!subLineActive) {
      if (next_Line != null && current_subLine == null) {
        const label = next_Line.querySelector("label");
        current_Label = label.className;

        current_Editable = next_Line.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
      } else if (current_subLine != null) {
        subLineActive = true;

        const current_subLine_firstHead = current_subLine.firstElementChild;
        const label = current_subLine_firstHead.querySelector("label");
        current_Label = label.className;

        current_subEditable =
          current_subLine_firstHead.querySelector(".inputSubContent");

        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
      }
    } else {
      current_Line = current_subEditable.closest(".line");
      next_Line = current_Line.nextElementSibling;

      current_subHead = current_subEditable.closest(".sub-Head");
      next_subHead = current_subHead.nextElementSibling;

      if (next_subHead != null) {
        const label = next_subHead.querySelector("label");
        current_Label = label.className;

        current_subEditable = next_subHead.querySelector(".inputSubContent");
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
      } else if (next_subHead == null && next_Line != null) {
        subLineActive = false;
        const label = next_Line.closest(".line").querySelector("label");
        current_Label = label.className;
        current_Editable = next_Line
          .closest(".line")
          .querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
      }
    }
    if (key == "ArrowRight") {
      window.getSelection().collapseToStart();
    } else {
      window.getSelection().collapseToEnd();
    }
  }

  function navigator(key) {
    updateElement();
    if (key == "ArrowUp") {
      backward();
    } else if (key == "ArrowDown") {
      forward();
    } else if (key == "ArrowLeft") {
      backward();
    } else if (key == "ArrowRight") {
      forward("ArrowRight");
    }
    updateElement();
    activeOption();
  }

  function updateLabel(label, current_EditableText) {
    if (label == "checkboxLabel") {
      return `<label class="checkboxLabel">
              <input type="checkbox"/><span class="unchecked"></span
            ></label>
            <div class="content">
              <ul class="inputContent" contenteditable="true">${current_EditableText}</ul>
            </div>`;
    }
  }

  function updateLine(label, current_EditableText, Div) {
    let newLabel = updateLabel(label, current_EditableText);

    if (label == "checkboxLabel") {
      Div.innerHTML = `<div class="Head">
          ${newLabel}
          <div class="actionsOff">
              <button class="expand">
                <i class="fa-solid fa-caret-down"></i>
              </button>
          </div>
        </div>
        <div class="sub-line-off">
          <div class="sub-Head">
            <label class="checkboxLabel">
              <input type="checkbox"/><span class="unchecked"></span
            ></label>
            <div class="sub-content">
              <ul class="inputSubContent" contenteditable="true"></ul>
            </div>
          </div>
        </div>`;
    }
  }

  function updateHead(label, current_EditableText, current_subContent, Div) {
    let newLabel = updateLabel(label, current_EditableText);

    Div.innerHTML = `<div class="Head">
         ${newLabel}
         <div class="actions">
             <button class="expand">
               <i class="fa-solid fa-caret-down"></i>
             </button>
         </div>
        </div>
       ${current_subContent}`;
  }

  function updateSubLine(label, current_EditableText, Div) {
    if (label == "checkboxLabel") {
      Div.innerHTML = `
    <label class="checkboxLabel">
      <input type="checkbox"/><span class="unchecked"></span
    ></label>
    <div class="sub-content">
      <ul class="inputSubContent" contenteditable="true">${current_EditableText}</ul>
    </div>`;
    }
  }

  function addDiv() {
    updateElement();

    if (!subLineActive) {
      const range = window.getSelection().getRangeAt(0);
      const tempRange = document.createRange();
      tempRange.selectNodeContents(current_Editable);
      tempRange.setEnd(range.startContainer, range.startOffset);

      const cursorPosition = tempRange.toString().length;

      // Create new line when sub line is off
      const Div = document.createElement("div");
      Div.classList.add("line");

      updateLine(current_Label, "", Div);

      if (cursorPosition == "0") {
        aditor.insertBefore(Div, current_Line);
        current_Editable = Div.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else if (next_Line != null) {
        aditor.insertBefore(Div, next_Line);
        current_Editable = Div.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else {
        aditor.appendChild(Div);
        current_Editable = Div.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      }
    } else {
      // updateElement();

      if (!subAditorActive && current_subEditable.textContent.trim() != "") {
        const range = window.getSelection().getRangeAt(0);
        const tempRange = document.createRange();
        tempRange.selectNodeContents(current_subEditable);
        tempRange.setEnd(range.startContainer, range.startOffset);

        const cursorPosition = tempRange.toString().length;

        // create new sub head in the sub line
        const Div = document.createElement("div");
        Div.classList.add("sub-Head");

        current_subHead = current_subEditable.closest(".sub-Head");
        current_subLine = current_subHead.closest(".sub-line");

        updateSubLine(current_Label, "", Div);

        if (cursorPosition == "0") {
          current_subLine.insertBefore(Div, current_subHead);
          current_subEditable = Div.querySelector(".inputSubContent");
          current_subEditable.focus();
          window.getSelection().selectAllChildren(current_subEditable);
          window.getSelection().collapseToEnd();
        } else if (next_subHead != null) {
          current_subLine = next_subHead.closest(".sub-line");
          current_subLine.insertBefore(Div, next_subHead);
          current_subEditable = Div.querySelector(".inputSubContent");
          current_subEditable.focus();
          window.getSelection().selectAllChildren(current_subEditable);
          window.getSelection().collapseToEnd();
        } else {
          current_subLine = current_subHead.closest(".sub-line");
          current_subLine.appendChild(Div);
          current_subEditable = Div.querySelector(".inputSubContent");
          current_subEditable.focus();
          window.getSelection().selectAllChildren(current_subEditable);
          window.getSelection().collapseToEnd();
        }
      } else if (current_subEditable.textContent.trim() != "") {
        // change the sub line
        updateSubLine(current_Label, current_EditableText, current_subHead);
        subAditorActive = false;
        current_subEditable = current_subHead.querySelector(".inputSubContent");
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      }

      if (current_Line.querySelector("label").className == "checkboxLabel") {
        const parent = current_subHead.closest(".line");
        updateParentCheckbox(parent);
        //check it later how did i change the parent when new subhead added in previos aditor
      }
    }
  }

  function elementFunc(current_Label) {
    updateElement();

    if (!subLineActive) {
      current_EditableText = current_Editable.textContent;

      let current_subContent = current_Editable
        .closest(".line")
        .querySelector(".sub-line");

      if (current_subContent == null) {
        updateLine(current_Label, current_EditableText, current_Line);
      } else {
        current_subContent = current_subContent.outerHTML;

        updateHead(
          current_Label,
          current_EditableText,
          current_subContent,
          current_Line
        );
      }

      current_Editable = current_Line.querySelector(".inputContent");
      current_Editable.focus();
      window.getSelection().selectAllChildren(current_Editable);
      window.getSelection().collapseToEnd();
    } else {
      subAditorActive = true;

      current_EditableText = current_subEditable.textContent;

      addDiv();
    }
  }

  function indentFunc() {
    updateElement();

    const HeadContent = current_Line.querySelector(".inputContent").textContent;

    current_subLine = current_Line.querySelector(".sub-line-off");
    if (HeadContent == "") {
      current_Editable.focus();
    } else if (subLineActive) {
      subLineActive = false;

      const label = current_Line.querySelector(".Head").querySelector("label");
      current_Label = label.className;

      if (current_Label == "headingLabel") {
        current_Label = "textLabel";
      }

      current_Editable = current_subEditable
        .closest(".sub-Head")
        .closest(".line")
        .querySelector(".inputContent");

      addDiv();
    } else if (current_subLine != null && HeadContent != "") {
      const current_subLine_Amount =
        current_subLine.querySelectorAll(".sub-Head").length;
      const actionBtn = current_Line.querySelector(".actionsOff");

      if (current_subLine_Amount == 1 && actionBtn != null) {
        subLineActive = true;

        current_subLine.classList.replace("sub-line-off", "sub-line");

        actionBtn.classList.replace("actionsOff", "actions");
        // current_subHead = current_subLine.querySelector(".sub-Head");
        current_subEditable = current_subLine.querySelector(".inputSubContent");

        const label = current_subEditable
          .closest(".sub-Head")
          .querySelector("label");
        current_Label = label.className;

        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      } else {
        subLineActive = false;

        // let expand = current_Line.querySelector(".sub-line");
        const expandBtn = current_Line.querySelector(".collapse");
        current_subLine = current_Line.querySelector(".sub-line-off");

        current_subLine.classList.replace("sub-line-off", "sub-line");
        expandBtn.classList.replace("collapse", "expand");
        expandBtn.innerHTML = ` <i class="fa-solid fa-caret-down"></i>`;

        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      }
    } else if (
      current_subLine == null &&
      current_subEditable.textContent != ""
    ) {
      subLineActive = false;

      const expandBtn = current_Line.querySelector(".expand");
      current_subLine = current_Line.querySelector(".sub-line");

      current_subLine.classList.replace("sub-line", "sub-line-off");
      expandBtn.classList.replace("expand", "collapse");
      expandBtn.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;

      current_Editable.focus();
      window.getSelection().selectAllChildren(current_Editable);
      window.getSelection().collapseToEnd();
    }
    // current_Editable.focus();
  }

  function updateNestedCheckbox(parent) {
    if (parent.querySelector(".Head").querySelector(".checked")) {
      const subUnchecked = parent
        .querySelector(".sub-line")
        .querySelectorAll(".unchecked");

      subUnchecked.forEach((item) => {
        item.classList.replace("unchecked", "checked");
      });
    } else {
      const subChecked = parent
        .querySelector(".sub-line")
        .querySelectorAll(".checked");

      subChecked.forEach((item) => {
        item.classList.replace("checked", "unchecked");
      });
    }
  }

  function updateParentCheckbox(parent) {
    const subUnchecked = parent
      .querySelector(".sub-line")
      .querySelectorAll(".unchecked").length;
    const subChecked = parent
      .querySelector(".sub-line")
      .querySelectorAll(".checked").length;

    if (subUnchecked == 0 && subChecked > 0) {
      const parentCheckbox = parent
        .querySelector(".Head")
        .querySelector(".unchecked");
      if (parentCheckbox != null) {
        parentCheckbox.classList.replace("unchecked", "checked");
      }
    } else if (subUnchecked > 0) {
      const parentCheckbox = parent
        .querySelector(".Head")
        .querySelector(".checked");
      if (parentCheckbox != null) {
        parentCheckbox.classList.replace("checked", "unchecked");
      }
    }
  }
}

export function initializeAditorCheckboxLite(inputSection) {
  inputSection.innerHTML = `
  <div class="aditor">
  <div class="line">
    <div class="Head">
      <label class="checkboxLabel">
        <input type="checkbox"><span class="unchecked" style="opacity: 0.25;"></span></label>
      <div class="content">
        <ul class="inputContent" contenteditable="true"></ul>
      </div>
      <div class="actionsOff">
        <button class="expand">
          <i class="fa-solid fa-caret-down"></i>
        </button>
      </div>
    </div>
    <div class="sub-line-off">
      <div class="sub-Head">
        <label class="checkboxLabel">
          <input type="checkbox"><span class="unchecked"></span></label>
        <div class="sub-content">
          <ul class="inputSubContent" contenteditable="true"></ul>
        </div>
      </div>
    </div>
  </div>
</div>`;

  const aditor = inputSection.querySelector(".aditor");

  let current_Label = "checkboxLabel";

  let current_EditableText = "";

  let subLineActive = false;
  let subAditorActive = false;

  let current_Editable = null;
  let current_subEditable = null;

  if (current_Editable == null) {
    current_Editable = inputSection.querySelector(".inputContent");
  }

  let current_Line = null;
  let next_Line = null;
  let previous_Line = null;

  let current_subLine = null;
  let previous_subLine = null;

  let current_subHead = null;
  let next_subHead = null;
  let previous_subHead = null;

  function updateElement() {
    current_Line = current_Editable.closest(".line");
    next_Line = current_Line.nextElementSibling;
    previous_Line = current_Line.previousElementSibling;

    while (next_Line && next_Line.classList.contains("collapsed")) {
      next_Line = next_Line.nextElementSibling;
    }

    while (previous_Line && previous_Line.classList.contains("collapsed")) {
      previous_Line = previous_Line.previousElementSibling;
    }

    current_subLine = current_Line.querySelector(".sub-line");

    if (current_subEditable != null) {
      current_subHead = current_subEditable.closest(".sub-Head");
      next_subHead = current_subHead.nextElementSibling;
      previous_subHead = current_subHead.previousElementSibling;
    }

    if (previous_Line != null) {
      previous_subLine = previous_Line.querySelector(".sub-line");
    }
  }

  let selection = false;

  function emptyAditor() {
    current_Label = "checkboxLabel";

    subLineActive = false;
    subAditorActive = false;

    aditor.innerHTML = `
  <div class="line">
    <div class="Head">
      <label class="checkboxLabel">
        <input type="checkbox"><span class="unchecked" style="opacity: 0.25;"></span></label>
      <div class="content">
        <ul class="inputContent" contenteditable="true"></ul>
      </div>
      <div class="actionsOff">
        <button class="expand">
          <i class="fa-solid fa-caret-down"></i>
        </button>
      </div>
    </div>
    <div class="sub-line-off">
      <div class="sub-Head">
        <label class="checkboxLabel">
          <input type="checkbox"><span class="unchecked"></span></label>
        <div class="sub-content">
          <ul class="inputSubContent" contenteditable="true"></ul>
        </div>
      </div>
    </div>
  </div>
`;

    selection = false;
    subAditorActive = false;
    current_Editable = aditor.querySelector(".inputContent");
    current_Editable.focus();
    window.getSelection().selectAllChildren(current_Editable);
    window.getSelection().collapseToEnd();
    updateElement();
  }

  let text = "";

  function updateSelectedText() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const selectedText = selection.toString();
      text = selectedText;
    }
  }

  aditor.addEventListener("keydown", (e) => {
    if (e.key == "/") {
      e.preventDefault();
      // options.classList.toggle("inactive");
    }

    if (e.key == " ") {
      if (!subLineActive) {
        if (current_Editable.textContent.startsWith("*")) {
          e.preventDefault();
          current_Editable.innerHTML = current_Editable.innerHTML.substring(1);
          current_Label = "checkboxLabel";
          elementFunc(current_Label);
        }
      } else {
        if (current_subEditable.textContent.startsWith("*")) {
          e.preventDefault();
          current_subEditable.innerHTML =
            current_subEditable.innerHTML.substring(1);
          current_Label = "checkboxLabel";
          elementFunc(current_Label);
        }
      }
    }

    if (e.key == "Tab") {
      e.preventDefault();
    }
    if (e.ctrlKey && e.key == "z") {
      e.preventDefault();
    }
    if (e.shiftKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      // Using a timeout to ensure the selection update after the key press event is fully processed
      setTimeout(updateSelectedText, 0);
    }
    if (e.ctrlKey && e.key == "x") {
      e.preventDefault();
      if (!subLineActive) {
        current_Editable.innerHTML = current_Editable.textContent.replace(
          text,
          ""
        );
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else {
        current_subEditable.innerHTML = current_subEditable.textContent.replace(
          text,
          ""
        );
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      }
    }
    if (e.ctrlKey && e.key == "c") {
      e.preventDefault();
      if (!subLineActive) {
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else {
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      }
    }

    if (e.ctrlKey && e.key == "v") {
      e.preventDefault();
      if (!subLineActive) {
        current_Editable.innerHTML += text;
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else {
        current_subEditable.innerHTML += text;
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      }
    }

    if (e.ctrlKey && e.key == "a") {
      e.preventDefault();
      selection = true;
      let range = document.createRange();
      range.selectNodeContents(aditor);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }

    if (e.key == "Tab") {
      e.preventDefault();
      // indentFunc();
    }

    if (e.key == "Enter") {
      e.preventDefault();

      updateElement();

      if (!subLineActive && current_Editable.textContent.trim() == "") {
        current_Label = "checkboxLabel";
        updateLine(current_Label, "", current_Line);
        current_Editable = current_Line.querySelector(".inputContent");
        current_Editable.focus();
      } else if (!subLineActive && current_Editable.textContent.trim() != "") {
        addDiv();
      } else if (
        subLineActive &&
        current_subEditable.textContent.trim() == ""
      ) {
        // indentFunc();
      } else if (
        subLineActive &&
        current_subEditable.textContent.trim() != ""
      ) {
        addDiv();
      }
    }

    if (e.key == "Backspace") {
      // Check if the ul is empty
      if (selection) {
        emptyAditor();
      }
      if (!subLineActive) {
        if (current_Editable.textContent.trim() == "") {
          updateElement();

          if (previous_Line) {
            // Delete the current sub
            current_Line.remove();

            // Focus on the ul of the previous sub
            current_Editable = previous_Line.querySelector(".inputContent");

            const label = current_Editable
              .closest(".line")
              .querySelector("label");

            current_Label = label.className;

            if (current_Editable) {
              e.preventDefault();

              current_Editable.focus();
              window.getSelection().selectAllChildren(current_Editable);
              window.getSelection().collapseToEnd();
            }
          } else if (next_Line) {
            // Delete the current sub
            current_Line.remove();

            // Focus on the ul of the previous sub
            current_Editable = next_Line.querySelector(".inputContent");
            const label = current_Editable
              .closest(".line")
              .querySelector("label");

            current_Label = label.className;

            if (current_Label == "headingLabel") {
              // headingActionBtn(previous_Line, "off");
            }

            if (current_Editable) {
              e.preventDefault();

              current_Editable.focus();
              window.getSelection().selectAllChildren(current_Editable);
              window.getSelection().collapseToEnd();
            }
          } else {
            emptyAditor();
          }
        }
      } else {
        if (current_subEditable.textContent.trim() == "") {
          updateElement();

          current_subHead = current_subEditable.closest(".sub-Head");
          next_subHead = current_subHead.nextElementSibling;
          previous_subHead = current_subHead.previousElementSibling;

          if (previous_subHead) {
            // Delete the current sub
            current_subHead.remove();

            // Focus on the ul of the previous sub
            current_subEditable =
              previous_subHead.querySelector(".inputSubContent");

            const label = previous_subHead.querySelector("label");

            current_Label = label.className;

            if (current_Label == "checkboxLabel") {
              const parent = previous_subHead.closest(".line");
              updateParentCheckbox(parent);
              //check it later how did i change the parent when new subhead added in previos aditor
            }

            if (current_subEditable) {
              e.preventDefault();

              current_subEditable.focus();
              window.getSelection().selectAllChildren(current_subEditable);
              window.getSelection().collapseToEnd();
            }
          } else if (next_subHead) {
            // Delete the current sub
            current_subHead.remove();

            // Focus on the ul of the next sub
            current_subEditable =
              next_subHead.querySelector(".inputSubContent");

            const label = next_subHead.querySelector("label");

            current_Label = label.className;

            if (current_Label == "checkboxLabel") {
              const parent = next_subHead.closest(".line");
              updateParentCheckbox(parent);
              //check it later how did i change the parent when new subhead added in previos aditor
            }

            if (current_subEditable) {
              e.preventDefault();

              current_subEditable.focus();
              window.getSelection().selectAllChildren(current_subEditable);
              window.getSelection().collapseToEnd();
            }
          } else {
            e.preventDefault();
            subLineActive = false;

            const actionBtn = current_Line.querySelector(".actions");
            actionBtn.classList.replace("actions", "actionsOff");

            current_subLine.classList.replace("sub-line", "sub-line-off");

            current_Editable = current_subEditable
              .closest(".line")
              .querySelector(".inputContent");

            const label = current_Editable
              .closest(".line")
              .querySelector("label");

            current_Label = label.className;

            current_Editable.focus();
            window.getSelection().selectAllChildren(current_Editable);
            window.getSelection().collapseToEnd();
          }
        }
      }
    }

    if (e.key == "ArrowUp" || e.key == "ArrowDown") {
      e.preventDefault();
      updateElement();

      navigator(e.key);
    }
    if (e.key == "ArrowLeft") {
      const range = window.getSelection().getRangeAt(0);
      const tempRange = document.createRange();
      if (!subLineActive) {
        tempRange.selectNodeContents(current_Editable);
        tempRange.setEnd(range.startContainer, range.startOffset);
        const cursorPosition = tempRange.toString().length;

        if (cursorPosition == 0) {
          e.preventDefault();
          updateElement();
          navigator(e.key);
        }
      } else {
        tempRange.selectNodeContents(current_subEditable);
        tempRange.setEnd(range.startContainer, range.startOffset);
        const cursorPosition = tempRange.toString().length;

        if (cursorPosition == 0) {
          e.preventDefault();
          updateElement();
          navigator(e.key);
        }
      }
    }
    if (e.key == "ArrowRight") {
      const range = window.getSelection().getRangeAt(0);
      const tempRange = document.createRange();
      if (!subLineActive) {
        tempRange.selectNodeContents(current_Editable);
        tempRange.setEnd(range.startContainer, range.startOffset);
        const cursorPosition = tempRange.toString().length;
        const currentEditableLength = current_Editable.textContent.length;

        if (cursorPosition == currentEditableLength) {
          e.preventDefault();
          updateElement();
          navigator(e.key);
        }
      } else {
        tempRange.selectNodeContents(current_subEditable);
        tempRange.setEnd(range.startContainer, range.startOffset);
        const cursorPosition = tempRange.toString().length;
        const currentEditableLength = current_subEditable.textContent.length;

        if (cursorPosition == currentEditableLength) {
          e.preventDefault();
          updateElement();
          navigator(e.key);
        }
      }
    }
  });

  const label = aditor.querySelector(".unchecked");

  let oneTime = false;

  current_Editable.textContent = "Add a steps";

  function LabelColor(value) {
    label.style.opacity = value;
  }

  LabelColor(0);

  aditor.addEventListener("click", (e) => {
    if (
      e.target.parentElement.className == "expand" ||
      e.target.parentElement.className == "collapse"
    ) {
      let expandBtn = e.target.parentElement;
      let expand = e.target.parentElement
        .closest(".line")
        .querySelector(".sub-line");
      if (expand != null) {
        expand.classList.replace("sub-line", "sub-line-off");
        expandBtn.classList.replace("expand", "collapse");
        expandBtn.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;
      } else {
        expand = expandBtn.closest(".line").querySelector(".sub-line-off");
        expand.classList.replace("sub-line-off", "sub-line");
        expandBtn.classList.replace("collapse", "expand");
        expandBtn.innerHTML = ` <i class="fa-solid fa-caret-down"></i>`;
      }
    } else if (e.target.parentElement.className == "actions") {
      const label = e.target.closest(".line").querySelector("label").className;

      let expandBtn = e.target;
      let expand = e.target.closest(".line").querySelector(".sub-line");
      if (expand != null) {
        expand.classList.replace("sub-line", "sub-line-off");
        expandBtn.classList.replace("expand", "collapse");
        expandBtn.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;
      } else {
        expand = expandBtn.closest(".line").querySelector(".sub-line-off");
        expand.classList.replace("sub-line-off", "sub-line");
        expandBtn.classList.replace("collapse", "expand");
        expandBtn.innerHTML = ` <i class="fa-solid fa-caret-down"></i>`;
      }
    } else if (e.target.classList == "inputContent") {
      if (!oneTime) {
        current_Editable = e.target;
        updateElement();
        current_Editable.textContent = "";
        LabelColor(1);
        oneTime = true;
        // activeOption();
      }
      subLineActive = false;
      current_Editable = e.target;
      updateElement();
      const label = current_Line.querySelector("label");
      current_Label = label.className;
    } else if (e.target.classList == "inputSubContent") {
      subLineActive = true;
      current_subEditable = e.target;
      current_Editable = current_subEditable
        .closest(".sub-Head")
        .closest(".line")
        .querySelector(".inputContent");
      updateElement();
      const label = current_subHead.querySelector("label");
      current_Label = label.className;
    } else if (e.target.type == "checkbox") {
      let checkbox = e.target.nextElementSibling;

      // checkbox.classList.toggle("done");
      checkbox.classList == "unchecked"
        ? checkbox.classList.replace("unchecked", "checked")
        : checkbox.classList.replace("checked", "unchecked");

      const parent = e.target.closest(".line");

      if (!checkbox.closest(".Head")) {
        updateParentCheckbox(parent);
      } else {
        updateNestedCheckbox(parent);
      }
    } else {
      if (e.target.className == "sub-line") {
        current_subLine = e.target.closest(".sub-line");
        current_subHead = e.target.closest(".sub-Head");
        updateElement();
        const label = current_subHead.querySelector("label");
        current_Label = label.className;
        current_subEditable = current_subHead.querySelector(".inputSubContent");
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      } else {
        current_Line = e.target.closest(".line");
        updateElement();
        const label = current_Line.querySelector("label");
        current_Label = label.className;
        current_Editable = current_Line.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      }
    }
  });

  function backward() {
    if (!subLineActive) {
      if (previous_Line != null && previous_subLine == null) {
        const label = previous_Line.querySelector("label");
        current_Label = label.className;

        current_Editable = previous_Line.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
      } else if (previous_Line != null && previous_subLine != null) {
        subLineActive = true;

        const current_subLine_lastHead = previous_subLine.lastElementChild;
        const label = current_subLine_lastHead.querySelector("label");
        current_Label = label.className;

        current_subEditable =
          current_subLine_lastHead.querySelector(".inputSubContent");

        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
      }
    } else {
      current_subHead = current_subEditable.closest(".sub-Head");
      previous_subHead = current_subHead.previousElementSibling;

      if (previous_subHead != null) {
        const label = previous_subHead.querySelector("label");
        current_Label = label.className;

        current_subEditable =
          previous_subHead.querySelector(".inputSubContent");
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
      } else if (previous_subHead == null) {
        subLineActive = false;
        const label = current_subHead.closest(".line").querySelector("label");
        current_Label = label.className;
        current_Editable = current_subHead
          .closest(".line")
          .querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
      }
    }

    window.getSelection().collapseToEnd();
  }

  function forward(key) {
    if (!subLineActive) {
      if (next_Line != null && current_subLine == null) {
        const label = next_Line.querySelector("label");
        current_Label = label.className;

        current_Editable = next_Line.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
      } else if (current_subLine != null) {
        subLineActive = true;

        const current_subLine_firstHead = current_subLine.firstElementChild;
        const label = current_subLine_firstHead.querySelector("label");
        current_Label = label.className;

        current_subEditable =
          current_subLine_firstHead.querySelector(".inputSubContent");

        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
      }
    } else {
      current_Line = current_subEditable.closest(".line");
      next_Line = current_Line.nextElementSibling;

      current_subHead = current_subEditable.closest(".sub-Head");
      next_subHead = current_subHead.nextElementSibling;

      if (next_subHead != null) {
        const label = next_subHead.querySelector("label");
        current_Label = label.className;

        current_subEditable = next_subHead.querySelector(".inputSubContent");
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
      } else if (next_subHead == null && next_Line != null) {
        subLineActive = false;
        const label = next_Line.closest(".line").querySelector("label");
        current_Label = label.className;
        current_Editable = next_Line
          .closest(".line")
          .querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
      }
    }
    if (key == "ArrowRight") {
      window.getSelection().collapseToStart();
    } else {
      window.getSelection().collapseToEnd();
    }
  }

  function navigator(key) {
    updateElement();
    if (key == "ArrowUp") {
      backward();
    } else if (key == "ArrowDown") {
      forward();
    } else if (key == "ArrowLeft") {
      backward();
    } else if (key == "ArrowRight") {
      forward("ArrowRight");
    }
    updateElement();
    activeOption();
  }

  function updateLabel(label, current_EditableText) {
    if (label == "checkboxLabel") {
      return `<label class="checkboxLabel">
              <input type="checkbox"/><span class="unchecked"></span
            ></label>
            <div class="content">
              <ul class="inputContent" contenteditable="true">${current_EditableText}</ul>
            </div>`;
    }
  }

  function updateLine(label, current_EditableText, Div) {
    let newLabel = updateLabel(label, current_EditableText);

    if (label == "checkboxLabel") {
      Div.innerHTML = `<div class="Head">
          ${newLabel}
          <div class="actionsOff">
              <button class="expand">
                <i class="fa-solid fa-caret-down"></i>
              </button>
          </div>
        </div>
        <div class="sub-line-off">
          <div class="sub-Head">
            <label class="checkboxLabel">
              <input type="checkbox"/><span class="unchecked"></span
            ></label>
            <div class="sub-content">
              <ul class="inputSubContent" contenteditable="true"></ul>
            </div>
          </div>
        </div>`;
    }
  }

  function updateHead(label, current_EditableText, current_subContent, Div) {
    let newLabel = updateLabel(label, current_EditableText);

    Div.innerHTML = `<div class="Head">
         ${newLabel}
         <div class="actions">
             <button class="expand">
               <i class="fa-solid fa-caret-down"></i>
             </button>
         </div>
        </div>
       ${current_subContent}`;
  }

  function updateSubLine(label, current_EditableText, Div) {
    if (label == "checkboxLabel") {
      Div.innerHTML = `
    <label class="checkboxLabel">
      <input type="checkbox"/><span class="unchecked"></span
    ></label>
    <div class="sub-content">
      <ul class="inputSubContent" contenteditable="true">${current_EditableText}</ul>
    </div>`;
    }
  }

  function addDiv() {
    updateElement();

    if (!subLineActive) {
      const range = window.getSelection().getRangeAt(0);
      const tempRange = document.createRange();
      tempRange.selectNodeContents(current_Editable);
      tempRange.setEnd(range.startContainer, range.startOffset);

      const cursorPosition = tempRange.toString().length;

      // Create new line when sub line is off
      const Div = document.createElement("div");
      Div.classList.add("line");

      updateLine(current_Label, "", Div);

      if (cursorPosition == "0") {
        aditor.insertBefore(Div, current_Line);
        current_Editable = Div.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else if (next_Line != null) {
        aditor.insertBefore(Div, next_Line);
        current_Editable = Div.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else {
        aditor.appendChild(Div);
        current_Editable = Div.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      }
    } else {
      // updateElement();

      if (!subAditorActive && current_subEditable.textContent.trim() != "") {
        const range = window.getSelection().getRangeAt(0);
        const tempRange = document.createRange();
        tempRange.selectNodeContents(current_subEditable);
        tempRange.setEnd(range.startContainer, range.startOffset);

        const cursorPosition = tempRange.toString().length;

        // create new sub head in the sub line
        const Div = document.createElement("div");
        Div.classList.add("sub-Head");

        current_subHead = current_subEditable.closest(".sub-Head");
        current_subLine = current_subHead.closest(".sub-line");

        updateSubLine(current_Label, "", Div);

        if (cursorPosition == "0") {
          current_subLine.insertBefore(Div, current_subHead);
          current_subEditable = Div.querySelector(".inputSubContent");
          current_subEditable.focus();
          window.getSelection().selectAllChildren(current_subEditable);
          window.getSelection().collapseToEnd();
        } else if (next_subHead != null) {
          current_subLine = next_subHead.closest(".sub-line");
          current_subLine.insertBefore(Div, next_subHead);
          current_subEditable = Div.querySelector(".inputSubContent");
          current_subEditable.focus();
          window.getSelection().selectAllChildren(current_subEditable);
          window.getSelection().collapseToEnd();
        } else {
          current_subLine = current_subHead.closest(".sub-line");
          current_subLine.appendChild(Div);
          current_subEditable = Div.querySelector(".inputSubContent");
          current_subEditable.focus();
          window.getSelection().selectAllChildren(current_subEditable);
          window.getSelection().collapseToEnd();
        }
      } else if (current_subEditable.textContent.trim() != "") {
        // change the sub line
        updateSubLine(current_Label, current_EditableText, current_subHead);
        subAditorActive = false;
        current_subEditable = current_subHead.querySelector(".inputSubContent");
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      }

      if (current_Line.querySelector("label").className == "checkboxLabel") {
        const parent = current_subHead.closest(".line");
        updateParentCheckbox(parent);
        //check it later how did i change the parent when new subhead added in previos aditor
      }
    }
  }

  function elementFunc(current_Label) {
    updateElement();

    if (!subLineActive) {
      current_EditableText = current_Editable.textContent;

      let current_subContent = current_Editable
        .closest(".line")
        .querySelector(".sub-line");

      if (current_subContent == null) {
        updateLine(current_Label, current_EditableText, current_Line);
      } else {
        current_subContent = current_subContent.outerHTML;

        updateHead(
          current_Label,
          current_EditableText,
          current_subContent,
          current_Line
        );
      }

      current_Editable = current_Line.querySelector(".inputContent");
      current_Editable.focus();
      window.getSelection().selectAllChildren(current_Editable);
      window.getSelection().collapseToEnd();
    } else {
      subAditorActive = true;

      current_EditableText = current_subEditable.textContent;

      addDiv();
    }
  }
}

export function initializeAditor(inputSection) {
  inputSection.innerHTML = ` 
           <div class="aditor">
              <div class="line">
                <div class="Head">
                <label class="textLabel"></label>
                  <div class="content">
                    <ul class="inputContent" contenteditable="true"></ul>
                  </div>
                <div class="actionsOff">
                    <button class="expand">
                      <i class="fa-solid fa-caret-down"></i>
                    </button>
                </div>
              </div>
              <div class="sub-line-off">
                <div class="sub-Head">
                  <label class="pointLabel">
                    <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
                  <div class="sub-content">
                    <ul class="inputSubContent" contenteditable="true"></ul>
                  </div>
                </div>
              </div></div>
            </div>
            <div class="options" id="dropdownMenu">
              <div class="icon textBtn active" tabindex="0">
                <span><i class="fa-solid fa-paragraph"></i></span>
              </div>
              <div class="icon headingBtn" tabindex="0">
                <span><i class="fa-solid fa-heading"></i></span>
              </div>
              <div class="icon pointBtn" tabindex="0">
                <span><i class="fa-solid fa-list"></i></span>
              </div>
              <div class="icon checkboxBtn" tabindex="0">
                <span><i class="fa-solid fa-square-check"></i></span>
              </div>
              <div class="icon indentBtn" tabindex="0">
                <span><i class="fa-solid fa-indent"></i></span>
              </div>
            </div>`;

  const aditor = inputSection.querySelector(".aditor");

  const headingBtn = inputSection.querySelector(".headingBtn");

  const textBtn = inputSection.querySelector(".textBtn");

  const pointBtn = inputSection.querySelector(".pointBtn");

  const checkboxBtn = inputSection.querySelector(".checkboxBtn");

  const indentBtn = inputSection.querySelector(".indentBtn");

  let current_Label = "textLabel";

  let current_EditableText = "";

  let subLineActive = false;
  let subAditorActive = false;

  let current_Editable = null;
  let current_subEditable = null;

  if (current_Editable == null) {
    current_Editable = inputSection.querySelector(".inputContent");
  }

  let current_Line = null;
  let next_Line = null;
  let previous_Line = null;

  let current_subLine = null;
  let previous_subLine = null;

  let current_subHead = null;
  let next_subHead = null;
  let previous_subHead = null;

  function updateElement() {
    current_Line = current_Editable.closest(".line");
    next_Line = current_Line.nextElementSibling;
    previous_Line = current_Line.previousElementSibling;

    while (next_Line && next_Line.classList.contains("collapsed")) {
      next_Line = next_Line.nextElementSibling;
    }

    while (previous_Line && previous_Line.classList.contains("collapsed")) {
      previous_Line = previous_Line.previousElementSibling;
    }

    current_subLine = current_Line.querySelector(".sub-line");

    if (current_subEditable != null) {
      current_subHead = current_subEditable.closest(".sub-Head");
      next_subHead = current_subHead.nextElementSibling;
      previous_subHead = current_subHead.previousElementSibling;
    }

    if (previous_Line != null) {
      previous_subLine = previous_Line.querySelector(".sub-line");
    }
  }

  let selection = false;

  function emptyAditor() {
    current_Label = "textLabel";

    subLineActive = false;
    subAditorActive = false;

    activeOption();

    aditor.innerHTML = `
        <div class="line">
              <div class="Head">
                <label class="textLabel"></label>
                  <div class="content">
                    <ul class="inputContent" contenteditable="true"></ul>
                  </div>
                <div class="actionsOff">
                    <button class="expand">
                      <i class="fa-solid fa-caret-down"></i>
                    </button>
                </div>
              </div>
              <div class="sub-line-off">
                <div class="sub-Head">
                  <label class="pointLabel">
                    <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
                  <div class="sub-content">
                    <ul class="inputSubContent" contenteditable="true"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

    activeOption();

    selection = false;
    subAditorActive = false;
    current_Editable = aditor.querySelector(".inputContent");
    current_Editable.focus();
    window.getSelection().selectAllChildren(current_Editable);
    window.getSelection().collapseToEnd();
    updateElement();
  }

  let text = "";

  function updateSelectedText() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const selectedText = selection.toString();
      text = selectedText;
    }
  }

  aditor.addEventListener("keydown", (e) => {
    if (e.key == "/") {
      e.preventDefault();
      // options.classList.toggle("inactive");
      dropdownMenu.classList.toggle("active");
      currentFocus = currentLabelActive();
    }

    if (e.key == " ") {
      if (!subLineActive) {
        if (current_Editable.textContent.startsWith("#")) {
          e.preventDefault();
          current_Editable.innerHTML = current_Editable.innerHTML.substring(1);
          current_Label = "headingLabel";
          headingFunc(current_Label);
        } else if (current_Editable.textContent.startsWith(">")) {
          e.preventDefault();
          current_Editable.innerHTML = current_Editable.innerHTML.substring(4);
          current_Label = "textLabel";
          elementFunc(current_Label);
        } else if (current_Editable.textContent.startsWith("-")) {
          e.preventDefault();
          current_Editable.innerHTML = current_Editable.innerHTML.substring(1);
          current_Label = "pointLabel";
          elementFunc(current_Label);
        } else if (current_Editable.textContent.startsWith("*")) {
          e.preventDefault();
          current_Editable.innerHTML = current_Editable.innerHTML.substring(1);
          current_Label = "checkboxLabel";
          elementFunc(current_Label);
        }
      } else {
        if (current_subEditable.textContent.startsWith(">")) {
          e.preventDefault();
          current_subEditable.innerHTML =
            current_subEditable.innerHTML.substring(4);
          current_Label = "textLabel";
          elementFunc(current_Label);
        } else if (current_subEditable.textContent.startsWith("-")) {
          e.preventDefault();
          current_subEditable.innerHTML =
            current_subEditable.innerHTML.substring(1);
          current_Label = "pointLabel";
          elementFunc(current_Label);
        } else if (current_subEditable.textContent.startsWith("*")) {
          e.preventDefault();
          current_subEditable.innerHTML =
            current_subEditable.innerHTML.substring(1);
          current_Label = "checkboxLabel";
          elementFunc(current_Label);
        }
      }
    }

    if (e.ctrlKey && e.key == "z") {
      e.preventDefault();
    }
    if (e.shiftKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      // Using a timeout to ensure the selection update after the key press event is fully processed
      setTimeout(updateSelectedText, 0);
    }
    if (e.ctrlKey && e.key == "x") {
      e.preventDefault();
      if (!subLineActive) {
        current_Editable.innerHTML = current_Editable.textContent.replace(
          text,
          ""
        );
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else {
        current_subEditable.innerHTML = current_subEditable.textContent.replace(
          text,
          ""
        );
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      }
    }
    if (e.ctrlKey && e.key == "c") {
      e.preventDefault();
      if (!subLineActive) {
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else {
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      }
    }

    if (e.ctrlKey && e.key == "v") {
      e.preventDefault();
      if (!subLineActive) {
        current_Editable.innerHTML += text;
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      } else {
        current_subEditable.innerHTML += text;
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      }
    }

    if (e.ctrlKey && e.key == "a") {
      e.preventDefault();
      selection = true;
      let range = document.createRange();
      range.selectNodeContents(aditor);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }

    if (e.key == "Tab") {
      if (e.shiftKey) {
        e.preventDefault();
        // if (current_Label == "headingLabel") {
        headingCollapse_All();
        // }
      } else {
        e.preventDefault();
        if (current_Label == "headingLabel") {
          const line = current_Editable.closest(".line");
          headingActionBtn(line, "switch");
          headingCollapse(line);
        } else {
          indentFunc();
        }
      }
    }

    if (e.key == "Enter") {
      e.preventDefault();

      updateElement();
      dropdownMenu.classList.remove("active");

      if (!subLineActive && current_Editable.textContent.trim() == "") {
        current_Label = "textLabel";
        updateLine(current_Label, "", current_Line);
        current_Editable = current_Line.querySelector(".inputContent");
        current_Editable.focus();
      } else if (!subLineActive && current_Editable.textContent.trim() != "") {
        if (
          current_Label == "headingLabel" &&
          current_Line.querySelector(".actionsOff")
        ) {
          current_Label = "textLabel";
          addDiv();
          headingScan();
        } else {
          addDiv();
        }
      } else if (
        subLineActive &&
        current_subEditable.textContent.trim() == ""
      ) {
        indentFunc();
      } else if (
        subLineActive &&
        current_subEditable.textContent.trim() != ""
      ) {
        addDiv();
      }
    }

    if (e.key == "Backspace") {
      // Check if the ul is empty
      if (selection) {
        emptyAditor();
      }
      if (!subLineActive) {
        if (current_Editable.textContent.trim() == "") {
          updateElement();

          if (previous_Line) {
            // Delete the current sub
            current_Line.remove();

            // Focus on the ul of the previous sub
            current_Editable = previous_Line.querySelector(".inputContent");

            const label = current_Editable
              .closest(".line")
              .querySelector("label");

            current_Label = label.className;

            if (current_Label == "headingLabel") {
              // headingActionBtn(previous_Line, "off");
              headingScan();
            }

            activeOption();

            if (current_Editable) {
              e.preventDefault();

              current_Editable.focus();
              window.getSelection().selectAllChildren(current_Editable);
              window.getSelection().collapseToEnd();
            }
          } else if (next_Line) {
            // Delete the current sub
            current_Line.remove();

            // Focus on the ul of the previous sub
            current_Editable = next_Line.querySelector(".inputContent");
            const label = current_Editable
              .closest(".line")
              .querySelector("label");

            current_Label = label.className;

            if (current_Label == "headingLabel") {
              // headingActionBtn(previous_Line, "off");
            }

            activeOption();

            if (current_Editable) {
              e.preventDefault();

              current_Editable.focus();
              window.getSelection().selectAllChildren(current_Editable);
              window.getSelection().collapseToEnd();
            }
          } else {
            emptyAditor();
          }
        }
      } else {
        if (current_subEditable.textContent.trim() == "") {
          updateElement();

          current_subHead = current_subEditable.closest(".sub-Head");
          next_subHead = current_subHead.nextElementSibling;
          previous_subHead = current_subHead.previousElementSibling;

          if (previous_subHead) {
            // Delete the current sub
            current_subHead.remove();

            // Focus on the ul of the previous sub
            current_subEditable =
              previous_subHead.querySelector(".inputSubContent");

            const label = previous_subHead.querySelector("label");

            current_Label = label.className;

            if (current_Label == "checkboxLabel") {
              const parent = previous_subHead.closest(".line");
              updateParentCheckbox(parent);
              //check it later how did i change the parent when new subhead added in previos aditor
            }

            activeOption();

            if (current_subEditable) {
              e.preventDefault();

              current_subEditable.focus();
              window.getSelection().selectAllChildren(current_subEditable);
              window.getSelection().collapseToEnd();
            }
          } else if (next_subHead) {
            // Delete the current sub
            current_subHead.remove();

            // Focus on the ul of the next sub
            current_subEditable =
              next_subHead.querySelector(".inputSubContent");

            const label = next_subHead.querySelector("label");

            current_Label = label.className;

            if (current_Label == "checkboxLabel") {
              const parent = next_subHead.closest(".line");
              updateParentCheckbox(parent);
              //check it later how did i change the parent when new subhead added in previos aditor
            }

            activeOption();

            if (current_subEditable) {
              e.preventDefault();

              current_subEditable.focus();
              window.getSelection().selectAllChildren(current_subEditable);
              window.getSelection().collapseToEnd();
            }
          } else {
            e.preventDefault();
            subLineActive = false;

            const actionBtn = current_Line.querySelector(".actions");
            actionBtn.classList.replace("actions", "actionsOff");

            current_subLine.classList.replace("sub-line", "sub-line-off");

            current_Editable = current_subEditable
              .closest(".line")
              .querySelector(".inputContent");

            const label = current_Editable
              .closest(".line")
              .querySelector("label");

            current_Label = label.className;
            activeOption();

            current_Editable.focus();
            window.getSelection().selectAllChildren(current_Editable);
            window.getSelection().collapseToEnd();
          }
        }
      }
    }

    if (
      (e.key == "ArrowUp" || e.key == "ArrowDown") &&
      !dropdownMenu.classList.contains("active")
    ) {
      e.preventDefault();
      updateElement();

      navigator(e.key);
    }
    if (e.key == "ArrowLeft" && !dropdownMenu.classList.contains("active")) {
      const range = window.getSelection().getRangeAt(0);
      const tempRange = document.createRange();
      if (!subLineActive) {
        tempRange.selectNodeContents(current_Editable);
        tempRange.setEnd(range.startContainer, range.startOffset);
        const cursorPosition = tempRange.toString().length;

        if (cursorPosition == 0) {
          e.preventDefault();
          updateElement();
          navigator(e.key);
        }
      } else {
        tempRange.selectNodeContents(current_subEditable);
        tempRange.setEnd(range.startContainer, range.startOffset);
        const cursorPosition = tempRange.toString().length;

        if (cursorPosition == 0) {
          e.preventDefault();
          updateElement();
          navigator(e.key);
        }
      }
    }
    if (e.key == "ArrowRight" && !dropdownMenu.classList.contains("active")) {
      const range = window.getSelection().getRangeAt(0);
      const tempRange = document.createRange();
      if (!subLineActive) {
        tempRange.selectNodeContents(current_Editable);
        tempRange.setEnd(range.startContainer, range.startOffset);
        const cursorPosition = tempRange.toString().length;
        const currentEditableLength = current_Editable.textContent.length;

        if (cursorPosition == currentEditableLength) {
          e.preventDefault();
          updateElement();
          navigator(e.key);
        }
      } else {
        tempRange.selectNodeContents(current_subEditable);
        tempRange.setEnd(range.startContainer, range.startOffset);
        const cursorPosition = tempRange.toString().length;
        const currentEditableLength = current_subEditable.textContent.length;

        if (cursorPosition == currentEditableLength) {
          e.preventDefault();
          updateElement();
          navigator(e.key);
        }
      }
    }
  });

  let oneTime = false;

  current_Editable.textContent = "write something .....";

  aditor.addEventListener("click", (e) => {
    if (
      e.target.parentElement.className == "expand" ||
      e.target.parentElement.className == "collapse"
    ) {
      const label = e.target.parentElement
        .closest(".line")
        .querySelector("label").className;

      if (label == "headingLabel") {
        const line = e.target.parentElement.closest(".line");
        headingActionBtn(line, "switch");
        headingCollapse(line);
      } else {
        let expandBtn = e.target.parentElement;
        let expand = e.target.parentElement
          .closest(".line")
          .querySelector(".sub-line");
        if (expand != null) {
          expand.classList.replace("sub-line", "sub-line-off");
          expandBtn.classList.replace("expand", "collapse");
          expandBtn.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;
        } else {
          expand = expandBtn.closest(".line").querySelector(".sub-line-off");
          expand.classList.replace("sub-line-off", "sub-line");
          expandBtn.classList.replace("collapse", "expand");
          expandBtn.innerHTML = ` <i class="fa-solid fa-caret-down"></i>`;
        }
      }
    } else if (e.target.parentElement.className == "actions") {
      const label = e.target.closest(".line").querySelector("label").className;

      if (label == "headingLabel") {
        const line = e.target.closest(".line");
        headingActionBtn(line, "switch");
        headingCollapse(line);
      } else {
        let expandBtn = e.target;
        let expand = e.target.closest(".line").querySelector(".sub-line");
        if (expand != null) {
          expand.classList.replace("sub-line", "sub-line-off");
          expandBtn.classList.replace("expand", "collapse");
          expandBtn.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;
        } else {
          expand = expandBtn.closest(".line").querySelector(".sub-line-off");
          expand.classList.replace("sub-line-off", "sub-line");
          expandBtn.classList.replace("collapse", "expand");
          expandBtn.innerHTML = ` <i class="fa-solid fa-caret-down"></i>`;
        }
      }
    } else if (e.target.classList == "inputContent") {
      if (!oneTime) {
        current_Editable = e.target;
        updateElement();
        current_Editable.textContent = "";
        oneTime = true;
      }
      subLineActive = false;
      current_Editable = e.target;
      updateElement();
      const label = current_Line.querySelector("label");
      current_Label = label.className;
      activeOption();
    } else if (e.target.classList == "inputSubContent") {
      subLineActive = true;
      current_subEditable = e.target;
      current_Editable = current_subEditable
        .closest(".sub-Head")
        .closest(".line")
        .querySelector(".inputContent");
      updateElement();
      const label = current_subHead.querySelector("label");
      current_Label = label.className;
      activeOption();
    } else if (e.target.type == "checkbox") {
      let checkbox = e.target.nextElementSibling;

      // checkbox.classList.toggle("done");
      checkbox.classList == "unchecked"
        ? checkbox.classList.replace("unchecked", "checked")
        : checkbox.classList.replace("checked", "unchecked");

      const parent = e.target.closest(".line");

      if (!checkbox.closest(".Head")) {
        updateParentCheckbox(parent);
      } else {
        updateNestedCheckbox(parent);
      }
    } else {
      if (e.target.className == "sub-line") {
        current_subLine = e.target.closest(".sub-line");
        current_subHead = e.target.closest(".sub-Head");
        updateElement();
        const label = current_subHead.querySelector("label");
        current_Label = label.className;
        current_subEditable = current_subHead.querySelector(".inputSubContent");
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      } else {
        current_Line = e.target.closest(".line");
        if (!oneTime) {
          updateElement();
          current_Editable.textContent = "";
          oneTime = true;
        }
        updateElement();
        const label = current_Line.querySelector("label");
        current_Label = label.className;
        current_Editable = current_Line.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      }
    }
  });

  function backward() {
    if (!subLineActive) {
      if (previous_Line != null && previous_subLine == null) {
        const label = previous_Line.querySelector("label");
        current_Label = label.className;

        current_Editable = previous_Line.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
      } else if (previous_Line != null && previous_subLine != null) {
        subLineActive = true;

        const current_subLine_lastHead = previous_subLine.lastElementChild;
        const label = current_subLine_lastHead.querySelector("label");
        current_Label = label.className;

        current_subEditable =
          current_subLine_lastHead.querySelector(".inputSubContent");

        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
      }
    } else {
      current_subHead = current_subEditable.closest(".sub-Head");
      previous_subHead = current_subHead.previousElementSibling;

      if (previous_subHead != null) {
        const label = previous_subHead.querySelector("label");
        current_Label = label.className;

        current_subEditable =
          previous_subHead.querySelector(".inputSubContent");
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
      } else if (previous_subHead == null) {
        subLineActive = false;
        const label = current_subHead.closest(".line").querySelector("label");
        current_Label = label.className;
        current_Editable = current_subHead
          .closest(".line")
          .querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
      }
    }

    window.getSelection().collapseToEnd();
  }

  function forward(key) {
    if (!subLineActive) {
      if (next_Line != null && current_subLine == null) {
        const label = next_Line.querySelector("label");
        current_Label = label.className;

        current_Editable = next_Line.querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
      } else if (current_subLine != null) {
        subLineActive = true;

        const current_subLine_firstHead = current_subLine.firstElementChild;
        const label = current_subLine_firstHead.querySelector("label");
        current_Label = label.className;

        current_subEditable =
          current_subLine_firstHead.querySelector(".inputSubContent");

        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
      }
    } else {
      current_Line = current_subEditable.closest(".line");
      next_Line = current_Line.nextElementSibling;

      current_subHead = current_subEditable.closest(".sub-Head");
      next_subHead = current_subHead.nextElementSibling;

      if (next_subHead != null) {
        const label = next_subHead.querySelector("label");
        current_Label = label.className;

        current_subEditable = next_subHead.querySelector(".inputSubContent");
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
      } else if (next_subHead == null && next_Line != null) {
        subLineActive = false;
        const label = next_Line.closest(".line").querySelector("label");
        current_Label = label.className;
        current_Editable = next_Line
          .closest(".line")
          .querySelector(".inputContent");
        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
      }
    }
    if (key == "ArrowRight") {
      window.getSelection().collapseToStart();
    } else {
      window.getSelection().collapseToEnd();
    }
  }

  function navigator(key) {
    updateElement();
    if (key == "ArrowUp") {
      backward();
    } else if (key == "ArrowDown") {
      forward();
    } else if (key == "ArrowLeft") {
      backward();
    } else if (key == "ArrowRight") {
      forward("ArrowRight");
    }
    updateElement();
    activeOption();
  }

  function updateLabel(label, current_EditableText) {
    if (label == "headingLabel") {
      return `<label class="headingLabel"></label>
              <div class="content">
                <h3><ul class="inputContent" contenteditable="true">${current_EditableText}</ul></h3>
              </div>`;
    } else if (label == "textLabel") {
      return `<label class="textLabel"></label>
              <div class="content">
                <ul class="inputContent" contenteditable="true">${current_EditableText}</ul>
              </div>`;
    } else if (label == "pointLabel") {
      return `<label class="pointLabel">
                <input type="checkbox" /><span class="points"><i class="fa-solid fa-circle"></i></span
              ></label>
              <div class="content">
                <ul class="inputContent" contenteditable="true">${current_EditableText}</ul>
              </div>`;
    } else if (label == "checkboxLabel") {
      return `<label class="checkboxLabel">
                <input type="checkbox"/><span class="unchecked"></span
              ></label>
              <div class="content">
                <ul class="inputContent" contenteditable="true">${current_EditableText}</ul>
              </div>`;
    }
  }

  function updateLine(label, current_EditableText, Div) {
    let newLabel = updateLabel(label, current_EditableText);

    if (label == "headingLabel") {
      Div.innerHTML = `<div class="Head">
      ${newLabel}
      <div class="actionsOff">
          <button class="expand">
            <i class="fa-solid fa-caret-down"></i>
          </button>
      </div>
    </div>
    `;
    } else if (label == "checkboxLabel") {
      Div.innerHTML = `<div class="Head">
            ${newLabel}
            <div class="actionsOff">
                <button class="expand">
                  <i class="fa-solid fa-caret-down"></i>
                </button>
            </div>
          </div>
          <div class="sub-line-off">
            <div class="sub-Head">
              <label class="checkboxLabel">
                <input type="checkbox"/><span class="unchecked"></span
              ></label>
              <div class="sub-content">
                <ul class="inputSubContent" contenteditable="true"></ul>
              </div>
            </div>
          </div>`;
    } else {
      Div.innerHTML = `<div class="Head">
            ${newLabel}
            <div class="actionsOff">
                <button class="expand">
                  <i class="fa-solid fa-caret-down"></i>
                </button>
            </div>
          </div>
          <div class="sub-line-off">
            <div class="sub-Head">
              <label class="pointLabel">
                <input type="checkbox" /><span class="points"><i class="fa-solid fa-square"></i></span
              ></label>
              <div class="sub-content">
                <ul class="inputSubContent" contenteditable="true"></ul>
              </div>
            </div>
          </div>`;
    }
  }

  function updateHead(label, current_EditableText, current_subContent, Div) {
    let newLabel = updateLabel(label, current_EditableText);

    Div.innerHTML = `<div class="Head">
           ${newLabel}
           <div class="actions">
               <button class="expand">
                 <i class="fa-solid fa-caret-down"></i>
               </button>
           </div>
          </div>
         ${current_subContent}`;
  }

  function updateSubLine(label, current_EditableText, Div) {
    if (label == "textLabel") {
      Div.innerHTML = `
        <label class="textLabel"></label>
        <div class="sub-content">
          <ul class="inputSubContent" contenteditable="true">${current_EditableText}</ul>
        </div>`;
    } else if (label == "pointLabel") {
      Div.innerHTML = `
      <label class="pointLabel">
         <input type="checkbox" /><span class="points"><i class="fa-solid fa-square"></i></i></span
       ></label>
       <div class="sub-content">
         <ul class="inputSubContent" contenteditable="true">${current_EditableText}</ul>
       </div>`;
    } else if (label == "checkboxLabel") {
      Div.innerHTML = `
      <label class="checkboxLabel">
        <input type="checkbox"/><span class="unchecked"></span
      ></label>
      <div class="sub-content">
        <ul class="inputSubContent" contenteditable="true">${current_EditableText}</ul>
      </div>`;
    }
  }

  function addDiv() {
    updateElement();
    activeOption();

    if (!subLineActive) {
      const range = window.getSelection().getRangeAt(0);
      const tempRange = document.createRange();
      tempRange.selectNodeContents(current_Editable);
      tempRange.setEnd(range.startContainer, range.startOffset);

      const cursorPosition = tempRange.toString().length;

      // Create new line when sub line is off
      const Div = document.createElement("div");
      Div.classList.add("line");

      updateLine(current_Label, "", Div);

      if (current_Label == "headingLabel") {
        let initial = null;
        let final = null;

        const childDivs = aditor.children;

        Array.from(childDivs).forEach((child) => {
          if (initial == null) {
            if (current_Line == child) {
              initial = child;
            }
          } else if (
            final == null &&
            child.querySelector("Label").className == "headingLabel"
          ) {
            final = child;
          }
        });

        if (cursorPosition == "0") {
          aditor.insertBefore(Div, current_Line);
          current_Editable = Div.querySelector(".inputContent");
          current_Editable.focus();
          window.getSelection().selectAllChildren(current_Editable);
          window.getSelection().collapseToEnd();
        } else if (final != null) {
          aditor.insertBefore(Div, final);
          current_Editable = Div.querySelector(".inputContent");
          current_Editable.focus();
          window.getSelection().selectAllChildren(current_Editable);
          window.getSelection().collapseToEnd();
        } else {
          aditor.appendChild(Div);
          current_Editable = Div.querySelector(".inputContent");
          current_Editable.focus();
          window.getSelection().selectAllChildren(current_Editable);
          window.getSelection().collapseToEnd();
        }
      } else {
        if (cursorPosition == "0") {
          aditor.insertBefore(Div, current_Line);
          current_Editable = Div.querySelector(".inputContent");
          current_Editable.focus();
          window.getSelection().selectAllChildren(current_Editable);
          window.getSelection().collapseToEnd();
        } else if (next_Line != null) {
          aditor.insertBefore(Div, next_Line);
          current_Editable = Div.querySelector(".inputContent");
          current_Editable.focus();
          window.getSelection().selectAllChildren(current_Editable);
          window.getSelection().collapseToEnd();
        } else {
          aditor.appendChild(Div);
          current_Editable = Div.querySelector(".inputContent");
          current_Editable.focus();
          window.getSelection().selectAllChildren(current_Editable);
          window.getSelection().collapseToEnd();
        }
      }
    } else {
      // updateElement();

      if (!subAditorActive && current_subEditable.textContent.trim() != "") {
        const range = window.getSelection().getRangeAt(0);
        const tempRange = document.createRange();
        tempRange.selectNodeContents(current_subEditable);
        tempRange.setEnd(range.startContainer, range.startOffset);

        const cursorPosition = tempRange.toString().length;

        // create new sub head in the sub line
        const Div = document.createElement("div");
        Div.classList.add("sub-Head");

        current_subHead = current_subEditable.closest(".sub-Head");
        current_subLine = current_subHead.closest(".sub-line");

        updateSubLine(current_Label, "", Div);

        if (cursorPosition == "0") {
          current_subLine.insertBefore(Div, current_subHead);
          current_subEditable = Div.querySelector(".inputSubContent");
          current_subEditable.focus();
          window.getSelection().selectAllChildren(current_subEditable);
          window.getSelection().collapseToEnd();
        } else if (next_subHead != null) {
          current_subLine = next_subHead.closest(".sub-line");
          current_subLine.insertBefore(Div, next_subHead);
          current_subEditable = Div.querySelector(".inputSubContent");
          current_subEditable.focus();
          window.getSelection().selectAllChildren(current_subEditable);
          window.getSelection().collapseToEnd();
        } else {
          current_subLine = current_subHead.closest(".sub-line");
          current_subLine.appendChild(Div);
          current_subEditable = Div.querySelector(".inputSubContent");
          current_subEditable.focus();
          window.getSelection().selectAllChildren(current_subEditable);
          window.getSelection().collapseToEnd();
        }
      } else if (current_subEditable.textContent.trim() != "") {
        // change the sub line
        updateSubLine(current_Label, current_EditableText, current_subHead);
        subAditorActive = false;
        current_subEditable = current_subHead.querySelector(".inputSubContent");
        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      }

      if (current_Line.querySelector("label").className == "checkboxLabel") {
        const parent = current_subHead.closest(".line");
        updateParentCheckbox(parent);
        //check it later how did i change the parent when new subhead added in previos aditor
      }
    }
  }

  function headingActionBtn(line, action) {
    if (action == "switch") {
      if (line.querySelector(".collapse")) {
        const expandBtn = line.querySelector(".collapse");
        expandBtn.classList.replace("collapse", "expand");
        expandBtn.innerHTML = ` <i class="fa-solid fa-caret-down"></i>`;
      } else if (line.querySelector(".expand")) {
        const expandBtn = line.querySelector(".expand");
        expandBtn.classList.replace("expand", "collapse");
        expandBtn.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;
      }
    } else if (action == "on" && line.querySelector(".actionsOff") != null) {
      const actionBtn = line.querySelector(".actionsOff");
      actionBtn.classList.replace("actionsOff", "actions");
    } else if (action == "off" && line.querySelector(".actions") != null) {
      const actionBtn = line.querySelector(".actions");
      actionBtn.classList.replace("actions", "actionsOff");
    } else if (action == "switchOff") {
      if (line.querySelector(".expand")) {
        const expandBtn = line.querySelector(".expand");
        expandBtn.classList.replace("expand", "collapse");
        expandBtn.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;
      }
    } else if (action == "switchOn") {
      if (line.querySelector(".collapse")) {
        const expandBtn = line.querySelector(".collapse");
        expandBtn.classList.replace("collapse", "expand");
        expandBtn.innerHTML = ` <i class="fa-solid fa-caret-down"></i>`;
      }
    }
  }

  function headingScan() {
    let initial = null;
    let mid_line = 0;

    const childDivs = Array.from(aditor.children);

    childDivs.forEach((child, index) => {
      const isHeading =
        child.querySelector("Label")?.className === "headingLabel";

      if (isHeading) {
        initial = index;
      } else if (initial !== null) {
        mid_line++;
      }

      if (initial != null && mid_line > 0) {
        headingActionBtn(childDivs[initial], "on");

        initial = null;
        mid_line = 0;
      } else if (initial != null && mid_line == 0) {
        headingActionBtn(childDivs[initial], "off");
      }
    });
  }

  function headingCollapse(line) {
    let initial = null;
    let final = null;

    const childDivs = aditor.children;

    Array.from(childDivs).forEach((child, index) => {
      if (initial == null) {
        if (line == child) {
          initial = index;
        }
      } else if (
        final == null &&
        child.querySelector("Label").className == "headingLabel"
      ) {
        final = index;
      }
    });

    if (final != null) {
      for (let i = initial + 1; i < final; i++) {
        childDivs[i].classList.toggle("collapsed");
      }
    } else {
      for (let i = initial + 1; i < childDivs.length; i++) {
        childDivs[i].classList.toggle("collapsed");
      }
    }
  }

  let allExpand = false;

  function headingCollapse_All() {
    let foundHeading = false;
    const childDivs = aditor.children;

    Array.from(childDivs).forEach((child, index) => {
      if (child.querySelector("Label").className == "headingLabel") {
        foundHeading = true;

        if (allExpand) {
          headingActionBtn(child, "switchOn");
        } else {
          headingActionBtn(child, "switchOff");
        }
      } else if (foundHeading) {
        if (!allExpand && childDivs[index].className == "line") {
          childDivs[index].classList.add("collapsed");
        } else if (
          allExpand &&
          childDivs[index].className == "line collapsed"
        ) {
          childDivs[index].classList.remove("collapsed");
        }
      }
    });
    allExpand = !allExpand;
    current_Editable = inputSection.querySelector(".inputContent");
    current_Line = current_Editable.closest(".line");
    current_Label = current_Line.querySelector("Label").className;
    current_Editable.focus();
    window.getSelection().selectAllChildren(current_Editable);
    window.getSelection().collapseToEnd();
    updateElement();
  }

  function updateNestedCheckbox(parent) {
    if (parent.querySelector(".Head").querySelector(".checked")) {
      const subUnchecked = parent
        .querySelector(".sub-line")
        .querySelectorAll(".unchecked");

      subUnchecked.forEach((item) => {
        item.classList.replace("unchecked", "checked");
      });
    } else {
      const subChecked = parent
        .querySelector(".sub-line")
        .querySelectorAll(".checked");

      subChecked.forEach((item) => {
        item.classList.replace("checked", "unchecked");
      });
    }
  }

  function updateParentCheckbox(parent) {
    const subUnchecked = parent
      .querySelector(".sub-line")
      .querySelectorAll(".unchecked").length;
    const subChecked = parent
      .querySelector(".sub-line")
      .querySelectorAll(".checked").length;

    if (subUnchecked == 0 && subChecked > 0) {
      const parentCheckbox = parent
        .querySelector(".Head")
        .querySelector(".unchecked");
      if (parentCheckbox != null) {
        parentCheckbox.classList.replace("unchecked", "checked");
      }
    } else if (subUnchecked > 0) {
      const parentCheckbox = parent
        .querySelector(".Head")
        .querySelector(".checked");
      if (parentCheckbox != null) {
        parentCheckbox.classList.replace("checked", "unchecked");
      }
    }
  }

  function headingFunc(current_Label) {
    updateElement();
    if (
      !subLineActive &&
      current_Label != "hradingLabel" &&
      current_Line.querySelector(".actionsOff")
    ) {
      current_Label = "headingLabel";
      activeOption();

      current_EditableText = current_Editable.textContent;
      updateElement();

      let current_subContent = current_Editable
        .closest(".line")
        .querySelector(".sub-line");

      if (current_subContent == null) {
        updateLine(current_Label, current_EditableText, current_Line);
      } else {
        current_subContent = current_subContent.outerHTML;

        updateHead(
          current_Label,
          current_EditableText,
          current_subContent,
          current_Line
        );
      }
      headingScan();
      current_Editable = current_Line.querySelector(".inputContent");
      current_Editable.focus();
      window.getSelection().selectAllChildren(current_Editable);
      window.getSelection().collapseToEnd();
    }
    // else
    // {
    //   current_Editable = current_Line.querySelector(".inputContent");
    //   current_Editable.focus();
    //   window.getSelection().selectAllChildren(current_Editable);
    //   window.getSelection().collapseToEnd();
    // }
  }

  function elementFunc(current_Label) {
    activeOption();
    updateElement();

    if (!subLineActive) {
      current_EditableText = current_Editable.textContent;

      let current_subContent = current_Editable
        .closest(".line")
        .querySelector(".sub-line");

      if (current_subContent == null) {
        updateLine(current_Label, current_EditableText, current_Line);
      } else {
        current_subContent = current_subContent.outerHTML;

        updateHead(
          current_Label,
          current_EditableText,
          current_subContent,
          current_Line
        );
      }

      current_Editable = current_Line.querySelector(".inputContent");
      current_Editable.focus();
      window.getSelection().selectAllChildren(current_Editable);
      window.getSelection().collapseToEnd();
    } else {
      subAditorActive = true;

      current_EditableText = current_subEditable.textContent;

      addDiv();
    }
  }

  function indentFunc() {
    updateElement();

    const HeadContent = current_Line.querySelector(".inputContent").textContent;

    current_subLine = current_Line.querySelector(".sub-line-off");
    if (HeadContent == "") {
      current_Editable.focus();
    } else if (subLineActive) {
      subLineActive = false;

      const label = current_Line.querySelector(".Head").querySelector("label");
      current_Label = label.className;

      if (current_Label == "headingLabel") {
        current_Label = "textLabel";
      }

      current_Editable = current_subEditable
        .closest(".sub-Head")
        .closest(".line")
        .querySelector(".inputContent");

      addDiv();
    } else if (current_subLine != null && HeadContent != "") {
      const current_subLine_Amount =
        current_subLine.querySelectorAll(".sub-Head").length;
      const actionBtn = current_Line.querySelector(".actionsOff");

      if (current_subLine_Amount == 1 && actionBtn != null) {
        subLineActive = true;

        current_subLine.classList.replace("sub-line-off", "sub-line");

        actionBtn.classList.replace("actionsOff", "actions");
        // current_subHead = current_subLine.querySelector(".sub-Head");
        current_subEditable = current_subLine.querySelector(".inputSubContent");

        const label = current_subEditable
          .closest(".sub-Head")
          .querySelector("label");
        current_Label = label.className;

        current_subEditable.focus();
        window.getSelection().selectAllChildren(current_subEditable);
        window.getSelection().collapseToEnd();
      } else {
        subLineActive = false;

        // let expand = current_Line.querySelector(".sub-line");
        const expandBtn = current_Line.querySelector(".collapse");
        current_subLine = current_Line.querySelector(".sub-line-off");

        current_subLine.classList.replace("sub-line-off", "sub-line");
        expandBtn.classList.replace("collapse", "expand");
        expandBtn.innerHTML = ` <i class="fa-solid fa-caret-down"></i>`;

        current_Editable.focus();
        window.getSelection().selectAllChildren(current_Editable);
        window.getSelection().collapseToEnd();
      }
    } else if (
      current_subLine == null &&
      current_subEditable.textContent != ""
    ) {
      subLineActive = false;

      const expandBtn = current_Line.querySelector(".expand");
      current_subLine = current_Line.querySelector(".sub-line");

      current_subLine.classList.replace("sub-line", "sub-line-off");
      expandBtn.classList.replace("expand", "collapse");
      expandBtn.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;

      current_Editable.focus();
      window.getSelection().selectAllChildren(current_Editable);
      window.getSelection().collapseToEnd();
    }
    // current_Editable.focus();
    activeOption();
  }

  function activeOption() {
    const options = inputSection.querySelector(".options");
    const allActiveOptions = options.querySelectorAll("[class$=active]");
    allActiveOptions.forEach((item) => {
      item.classList.remove("active");
    });

    if (subLineActive) {
      indentBtn.classList.add("active");
    } else {
      indentBtn.classList.remove("active");
    }

    if (current_Label == "headingLabel") {
      headingBtn.classList.add("active");
    } else if (current_Label == "textLabel") {
      textBtn.classList.add("active");
    } else if (current_Label == "pointLabel") {
      pointBtn.classList.add("active");
    } else if (current_Label == "checkboxLabel") {
      checkboxBtn.classList.add("active");
    }
  }

  const dropdownMenu = inputSection.querySelector("#dropdownMenu");

  let currentFocus;

  function currentLabelActive() {
    if (current_Label == "textLabel") {
      return 0;
    } else if (current_Label == "headingLabel") {
      return 1;
    } else if (current_Label == "pointLabel") {
      return 2;
    } else if (current_Label == "checkboxLabel") {
      return 3;
    }
  }

  inputSection.addEventListener("keydown", (e) => {
    if (dropdownMenu.classList.contains("active")) {
      const items = dropdownMenu.querySelectorAll(".icon");

      if (e.key === "ArrowRight") {
        e.preventDefault();
        currentFocus = (currentFocus + 1) % items.length;
        items[currentFocus].focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        currentFocus = (currentFocus - 1 + items.length) % items.length;
        items[currentFocus].focus();
      } else if (e.key === "Enter" && currentFocus !== -1) {
        e.preventDefault();
        items[currentFocus].click();
        dropdownMenu.classList.remove("active");
      }
    }
  });

  headingBtn.addEventListener("click", (e) => {
    if (!subLineActive) {
      current_Label = "headingLabel";
      headingFunc(current_Label);
    } else {
      // current_subEditable = current_subHead.querySelector(".inputSubContent");
      current_subEditable.focus();
      window.getSelection().selectAllChildren(current_subEditable);
      window.getSelection().collapseToEnd();
    }
  });

  textBtn.addEventListener("click", (e) => {
    current_Label = "textLabel";
    elementFunc(current_Label);
  });

  pointBtn.addEventListener("click", (e) => {
    current_Label = "pointLabel";
    elementFunc(current_Label);
  });

  checkboxBtn.addEventListener("click", (e) => {
    current_Label = "checkboxLabel";
    elementFunc(current_Label);
  });

  indentBtn.addEventListener("click", (e) => {
    indentFunc();
  });
}
