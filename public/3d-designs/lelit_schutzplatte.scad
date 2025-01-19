use <MCAD/triangles.scad>;

inner_wall_height = 190;

wall_thickness = 1.5;

horizontal_piece_depth = 35;

front_wall_height = 12;

width = 190;

screw_diameter = 4;

screw_offset = 7;

screw_piece_width = 15;

translate([screw_piece_width, horizontal_piece_depth + wall_thickness*2,wall_thickness]) rotate([180,90,90]) triangle(front_wall_height * 1.1,front_wall_height + wall_thickness,wall_thickness);

translate([width - screw_piece_width, horizontal_piece_depth + wall_thickness,wall_thickness]) rotate([0,90,90]) triangle(front_wall_height * 1.1,front_wall_height + wall_thickness,wall_thickness);


// large inner wall
cube([width, wall_thickness, inner_wall_height]);

// horizontal piece
translate([0, wall_thickness, 0]) cube([width, horizontal_piece_depth, wall_thickness]);

// pieces connecting to the screws
difference()
{
    translate([0, wall_thickness + horizontal_piece_depth, - (front_wall_height)]) cube([screw_piece_width, wall_thickness, front_wall_height + wall_thickness]);
    
    translate([screw_offset, horizontal_piece_depth + wall_thickness / 2, -front_wall_height/2]) rotate(a=[0,90,90]) cylinder(h = 10 * wall_thickness, r = screw_diameter / 2, $fn=50, center = true);

}

difference()
{
    translate([width - screw_piece_width, wall_thickness + horizontal_piece_depth, - (front_wall_height)]) cube([screw_piece_width, wall_thickness, front_wall_height + wall_thickness]);
    translate([width - screw_offset, horizontal_piece_depth + wall_thickness / 2, -front_wall_height/2]) rotate(a=[0,90,90]) cylinder(h = 10 * wall_thickness, r = screw_diameter / 2, $fn=50, center = true);
}
