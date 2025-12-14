# Génère icônes PNG 192/512 et versions maskable depuis une source
param(
    [string]$Source = "frontend/assets/images/photo1.png",
    [string]$DestDir = "frontend/assets/images"
)
Add-Type -AssemblyName System.Drawing
$sizes = @(192, 512)
foreach ($size in $sizes) {
    $img = [System.Drawing.Image]::FromFile($Source)
    $bmp = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.DrawImage($img, 0, 0, $size, $size)
    $out = Join-Path $DestDir ("icon-$size.png")
    $bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose(); $bmp.Dispose();

    # Maskable: place image centered with safe-area padding (scale ~84%)
    $maskScale = 0.84
    $inner = [int]($size * $maskScale)
    $maskBmp = New-Object System.Drawing.Bitmap $size, $size
    $g2 = [System.Drawing.Graphics]::FromImage($maskBmp)
    $g2.Clear([System.Drawing.Color]::Transparent)
    $g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g2.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g2.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $x = [int](($size - $inner) / 2)
    $y = $x
    $g2.DrawImage($img, $x, $y, $inner, $inner)
    $outMask = Join-Path $DestDir ("icon-$size-maskable.png")
    $maskBmp.Save($outMask, [System.Drawing.Imaging.ImageFormat]::Png)
    $g2.Dispose(); $maskBmp.Dispose(); $img.Dispose()
}
Write-Output "Icons generated in: $DestDir"