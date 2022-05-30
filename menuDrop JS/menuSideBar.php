<div class="sidebar">
  <ul>
    <li>MENU</li>
    <li class="menu"><a href="pag1.php">PAG1</a></li>
    <li class="menu"><a href="pag2.php">PAG2</a></li>
    <li>
      <!-- Sub menu 1 -->
      <ul class="sub-pag1">
        <li class="sub-menu" onclick="trocarClass('sub-pag1')">
        <span>SUB PAG1</span> <!-- Titulo do SubMenu -->
      </li>
        <li class="sub not-show"><a href="pag3.php">PAG3</a></li>
        <li class="sub not-show"><a href="pag4.php">PAG4</a></li>
      </ul>
      <!--Fim Sub menu 1 -->
    </li>
    <li class="menu"><a href="pag5.php">PAG5</a></li>
    <li class="menu"><a href="pag6.php">PAG6</a></li>
    <li>
      <!-- Sub menu 2 -->
      <ul class="sub-pag2">
        <li class="sub-menu" onclick="trocarClass('sub-pag2')">
          <span>SUB PAG2</span> <!-- Titulo do SubMenu -->
        </li>
        <li class="sub not-show"><a href="pag7.php">PAG7</a></li>
        <li class="sub not-show"><a href="pag8.php">PAG8</a></li>
      </ul>
    </li>
  </ul>
  <!-- Fim Sub menu 2 -->
</div>
<script src="script.js"></script>